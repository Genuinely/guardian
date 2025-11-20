import React, { useEffect, useRef, useState } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

interface TranscriptDisplayProps {
  websocketUrl: string;
}

// Define your scam-related keywords here
const SCAM_KEYWORDS = [
  // Personal Information
  'ssn', 'social security', 'social security number', 'social',
  'credit card', 'bank account', 'routing number', 'account number',
  'password', 'pin', 'date of birth', 'birthday', 'mother\'s maiden name',
  
  // Threats & Urgency
  'arrest', 'warrant', 'police', 'cops', 'jail', 'prison',
  'lawsuit', 'legal action', 'court', 'attorney',
  'suspend', 'suspended', 'freeze', 'frozen',
  'urgent', 'immediately', 'right now', 'within 24 hours',
  
  // Money-related
  'wire transfer', 'gift card', 'bitcoin', 'cryptocurrency',
  'cash', 'payment', 'pay', 'owe', 'debt', 'refund',
  'tax', 'taxes', 'irs', 'penalty', 'fine',
  
  // Common scam phrases
  'final notice', 'last chance', 'verify', 'confirm',
  'click here', 'call back', 'press 1',
  'congratulations', 'winner', 'prize',
  'computer', 'virus', 'hacked', 'security breach',
  
  // Impersonation
  'government', 'federal', 'medicare', 'medicaid',
  'microsoft', 'apple', 'amazon', 'google',
  'grandson', 'granddaughter', 'family member',
];

// Extract keywords from text
function extractKeywords(text: string): string[] {
  const words = text.toLowerCase().split(/\s+/);
  const found: string[] = [];
  
  words.forEach(word => {
    const cleanWord = word.replace(/[.,!?;:()]/g, '');
    SCAM_KEYWORDS.forEach(keyword => {
      if (cleanWord === keyword || cleanWord.includes(keyword)) {
        // Store the original keyword (not the cleaned version)
        const matchedKeyword = SCAM_KEYWORDS.find(k => cleanWord === k || cleanWord.includes(k));
        if (matchedKeyword && !found.includes(matchedKeyword)) {
          found.push(matchedKeyword);
        }
      }
    });
  });
  
  return found;
}

// Highlight keywords in text
function highlightKeywords(text: string): React.ReactElement[] {
  const words = text.split(/(\s+)/); // Split but keep spaces
  const elements: React.ReactElement[] = [];
  
  words.forEach((word, index) => {
    // Remove punctuation for matching but keep it for display
    const cleanWord = word.toLowerCase().replace(/[.,!?;:()]/g, '');
    const isKeyword = SCAM_KEYWORDS.some(keyword => {
      // Check if the clean word matches or contains the keyword
      return cleanWord === keyword || cleanWord.includes(keyword);
    });
    
    if (isKeyword) {
      // Highlighted keyword - pink text with pink background
      console.log('🎀 Highlighting keyword:', word);
      elements.push(
        <span 
          key={index}
          style={{ 
            color: '#D81B60',
            backgroundColor: 'rgba(216, 27, 96, 0.15)',
            padding: '2px 6px',
            borderRadius: '4px',
            fontWeight: '600'
          }}
        >
          {word}
        </span>
      );
    } else if (word.trim() === '') {
      // Just a space
      elements.push(<span key={index}>{word}</span>);
    } else {
      // Regular word - black text
      elements.push(
        <span 
          key={index}
          style={{ color: '#000' }}
        >
          {word}
        </span>
      );
    }
  });
  
  return elements;
}

export function TranscriptDisplay({ websocketUrl }: TranscriptDisplayProps) {
  const { isConnected, partialTranscript, finalTranscripts, error } = useWebSocket(websocketUrl);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [detectedKeywords, setDetectedKeywords] = useState<Set<string>>(new Set());

  // Extract keywords from all transcripts
  useEffect(() => {
    const allText = [...finalTranscripts, partialTranscript].join(' ');
    const keywords = extractKeywords(allText);
    setDetectedKeywords(new Set(keywords));
  }, [finalTranscripts, partialTranscript]);

  // Auto-scroll to bottom when new transcripts arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [finalTranscripts, partialTranscript]);

  return (
    <div 
      style={{
        position: 'absolute',
        top: '180px',
        left: '19px',
        width: '283px',
        height: '255px',
        backgroundColor: '#1a7b7f',
        borderRadius: '16px',
        boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)',
        zIndex: 10
      }}
    >
      {/* Inner container with proper padding */}
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', paddingTop: '17px', paddingBottom: '20px', paddingLeft: '24px', paddingRight: '24px' }}>
        {/* Header */}
        <div className="flex items-center gap-2 mb-3 shrink-0">
          <div className="bg-[#b1d2d3] rounded-[46.667px] size-[20px] flex items-center justify-center shrink-0">
            <svg className="size-[12px]" fill="none" viewBox="0 0 16 16">
              <path d="M8 4v8m4-4H4" stroke="#1A7B7F" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <p className="font-['Quattrocento_Sans:Bold',sans-serif] text-[14px] text-[rgba(255,255,255,0.91)] tracking-[-0.85px]">
            Live Transcript
          </p>
        </div>

        {/* Connection Status - Top Right Corner - Just a dot */}
        <div className="absolute top-[14px] right-[14px] z-20">
          <div 
            className={`w-3 h-3 rounded-full shadow-lg ${isConnected ? 'bg-green-400' : 'bg-red-400'}`}
            title={isConnected ? 'Live' : 'Disconnected'}
          />
        </div>

        {/* Keywords Section - Top Left under Live Transcript */}
        <div className="shrink-0" style={{ marginBottom: '5px' }}>
          <p className="font-['Quattrocento_Sans:Bold',sans-serif] text-[9px] mb-2" style={{ fontWeight: '700', color: 'rgba(255, 255, 255, 0.7)' }}>
            Keywords:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {detectedKeywords.size === 0 ? (
              <span className="font-['Quattrocento_Sans:Regular',sans-serif] text-[8px] italic text-white/60">None detected</span>
            ) : (
              Array.from(detectedKeywords).map((keyword, index) => (
                <span
                  key={`keyword-${keyword}-${index}`}
                  className="text-[8px] font-semibold"
                  style={{
                    backgroundColor: '#FFF5F8',
                    color: '#D81B60',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    border: '0.5px solid #D81B60'
                  }}
                >
                  {keyword}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-500/20 rounded p-2 mb-4 shrink-0">
            <p className="text-[10px] text-red-200">{error}</p>
          </div>
        )}

        {/* White Content Container */}
        <div className="flex-1 flex flex-col shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', paddingTop: '14px', paddingLeft: '14px', paddingRight: '14px', paddingBottom: '14px', borderRadius: '16px', minHeight: 0, marginBottom: '3px' }}>

          {/* Transcript Container */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto overflow-x-hidden"
            style={{ paddingRight: '4px', minHeight: 0 }}
          >
            {/* No transcripts yet */}
            {finalTranscripts.length === 0 && !partialTranscript && (
              <p className="font-['Quattrocento_Sans:Regular',sans-serif] text-[10px] italic" style={{ color: 'rgba(0,0,0,0.5)', padding: '12px 0' }}>
                Waiting for call transcription...
              </p>
            )}

            {/* Final Transcripts */}
            <div className="space-y-3">
              {finalTranscripts.map((transcript, index) => (
                <div 
                  key={`transcript-${index}-${transcript.substring(0, 10)}`}
                  style={{ backgroundColor: '#f3f4f6', padding: '10px', borderRadius: '8px' }}
                >
                  <p className="font-['Quattrocento_Sans:Regular',sans-serif] text-[10px]" style={{ lineHeight: '1.6', color: '#000' }}>
                    {highlightKeywords(transcript)}
                  </p>
                </div>
              ))}
            </div>

            {/* Partial Transcript (in progress) */}
            {partialTranscript && (
              <div style={{ backgroundColor: '#f9fafb', marginTop: '12px', padding: '10px', borderRadius: '8px', border: '1px dashed #d1d5db' }}>
                <p className="font-['Quattrocento_Sans:Regular',sans-serif] text-[10px] italic" style={{ lineHeight: '1.6', color: '#000' }}>
                  {highlightKeywords(partialTranscript)}
                  <span className="inline-block w-1 h-3 bg-gray-600 ml-0.5 animate-pulse" />
                </p>
              </div>
            )}
          </div>

          {/* Transcript Count Footer */}
          <div className="flex justify-between items-center mt-4 pt-3" style={{ borderTop: '1px solid #d1d5db' }}>
            <p className="font-['Quattrocento_Sans:Regular',sans-serif] text-[9px]" style={{ color: 'rgba(0,0,0,0.5)' }}>
              {finalTranscripts.length} {finalTranscripts.length === 1 ? 'message' : 'messages'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}