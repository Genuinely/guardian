import { useEffect, useRef, useState } from 'react';

interface TranscriptMessage {
  type: 'partial' | 'final';
  text: string;
}

interface UseWebSocketReturn {
  isConnected: boolean;
  partialTranscript: string;
  finalTranscripts: string[];
  error: string | null;
}

export function useWebSocket(url: string): UseWebSocketReturn {
  const [isConnected, setIsConnected] = useState(false);
  const [partialTranscript, setPartialTranscript] = useState('');
  const [finalTranscripts, setFinalTranscripts] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const connect = () => {
      try {
        const ws = new WebSocket(url);
        wsRef.current = ws;

        ws.onopen = () => {
          console.log('🟢 Connected to backend WebSocket');
          setIsConnected(true);
          setError(null);
        };

        ws.onmessage = (event) => {
          try {
            const message: TranscriptMessage = JSON.parse(event.data);
            
            if (message.type === 'partial') {
              // Append partial transcripts
              setPartialTranscript(prev => prev + message.text);
            } else if (message.type === 'final') {
              // Add final transcript to list and clear partial
              setFinalTranscripts(prev => [...prev, message.text]);
              setPartialTranscript('');
            }
          } catch (err) {
            console.error('Error parsing message:', err);
          }
        };

        ws.onerror = (event) => {
          console.error('❌ WebSocket error:', event);
          setError('Connection error');
        };

        ws.onclose = () => {
          console.log('🔴 WebSocket disconnected');
          setIsConnected(false);
          
          // Attempt to reconnect after 3 seconds
          reconnectTimeoutRef.current = setTimeout(() => {
            console.log('🔄 Attempting to reconnect...');
            connect();
          }, 3000);
        };
      } catch (err) {
        console.error('Failed to create WebSocket:', err);
        setError('Failed to connect');
      }
    };

    connect();

    // Cleanup function
    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [url]);

  return {
    isConnected,
    partialTranscript,
    finalTranscripts,
    error
  };
}

