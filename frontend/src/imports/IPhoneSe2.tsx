import React from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import svgPaths from "./svg-jt3pk73hdf";
import { TranscriptDisplay } from "../components/TranscriptDisplay";

gsap.registerPlugin(TextPlugin);

// WebSocket URL - update this to match your backend
const WEBSOCKET_URL = "ws://nonrelativistic-precerebral-valery.ngrok-free.dev/frontend-stream";

function Frame19() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current, 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      );
    }
  }, []);
  
  return (
    <div ref={ref} className="absolute box-border content-stretch flex flex-col items-start left-[31px] not-italic pb-[5px] pt-0 px-0 top-[38px] w-[167px]">
      <p className="font-['Quattrocento_Sans:Bold',sans-serif] leading-[15.027px] relative shrink-0 text-[9.66px] tracking-[-0.483px] w-full" style={{ color: '#1a7b7f' }}>March 22nd at 11:00pm</p>
      <p className="font-['Quattrocento:Regular',sans-serif] leading-[23.752px] relative shrink-0 text-[26px] tracking-[-1.3px] w-full" style={{ color: '#1a7b7f' }}>Susupicous Call</p>
    </div>
  );
}

function Frame26() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, delay: 0.5, ease: "back.out(1.7)" }
      );
    }
  }, []);
  
  return <div ref={ref} className="absolute bg-white left-[226px] rounded-[30px] size-[26px] top-[36px]" />;
}

function Frame27() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, delay: 0.6, ease: "back.out(1.7)" }
      );
    }
  }, []);
  
  return <div ref={ref} className="absolute bg-white h-[26px] left-[257px] rounded-[30px] top-[36px] w-[55px]" />;
}

function Frame13() {
  return (
    <div>
      <Frame19 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[48px] pb-[4px] pt-0 px-0 top-[10px] w-[150px]">
      <p className="font-['Quattrocento_Sans:Bold',sans-serif] leading-[23.752px] not-italic relative shrink-0 text-[17px] text-[rgba(26,123,127,0.63)] tracking-[-0.85px] w-[144px]">Unknown Scam</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[14.78px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Quattrocento_Sans:Regular',sans-serif] leading-[14.78px] left-0 not-italic text-[9px] text-[rgba(44,44,44,0.72)] text-nowrap top-px whitespace-pre">Threatening Language Detected</p>
    </div>
  );
}

function PrimitiveDiv() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { width: "0%" },
        { width: "100%", duration: 2, delay: 1, ease: "power2.inOut" }
      );
    }
  }, []);
  
  return <div ref={ref} className="bg-[#1a7b7f] h-[2.956px] rounded-[1.23981e+07px] shrink-0 w-full" data-name="Primitive.div" />;
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] h-[23.647px] items-start left-[16px] top-0 w-[200.264px]" data-name="Container">
      <Container />
      <PrimitiveDiv />
    </div>
  );
}

function FlowbiteLanguageOutline() {
  return (
    <div className="absolute left-[2.83px] size-[11.333px] top-[2.83px]" data-name="flowbite:language-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="flowbite:language-outline">
          <path d={svgPaths.p33c2af80} id="Vector" stroke="var(--stroke-0, #1A7B7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.944458" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(26,123,127,0.25)] left-[-5px] overflow-clip rounded-[28.334px] size-[17px] top-[4px]">
      <FlowbiteLanguageOutline />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[23.647px] left-[19px] top-[31px] w-[218px]" data-name="Container">
      <Container1 />
      <Frame />
    </div>
  );
}

function Frame7() {
  const ref = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      const text = ref.current.textContent || "";
      ref.current.textContent = "";
      
      gsap.to(ref.current, {
        duration: 1.5,
        delay: 1.5,
        text: text,
        ease: "none"
      });
    }
  }, []);
  
  return (
    <div className="absolute content-stretch flex font-['Quattrocento_Sans:Bold',sans-serif] gap-[3px] items-center leading-[15.027px] left-[14px] not-italic text-[10px] text-[rgba(14,14,14,0.74)] top-[8px] tracking-[-0.5px]">
      <p className="relative shrink-0 text-nowrap whitespace-pre">1 out 4 steps</p>
      <p ref={ref} className="relative shrink-0 w-[129px]">Analyzing potential scam</p>
    </div>
  );
}

function Frame6() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.8 }
      );
    }
  }, []);
  
  return (
    <div ref={ref} className="absolute bg-[#f8f8f8] h-[64px] left-[13px] overflow-clip rounded-[10px] top-[183px] w-[255px]">
      <Container2 />
      <Frame7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[10px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Frame 59">
          <rect fill="var(--fill-0, #B1D2D3)" fillOpacity="0.48" height="10" rx="5" width="10" />
          <path clipRule="evenodd" d={svgPaths.p35f2e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Quattrocento_Sans:Regular',sans-serif] leading-[12.942px] not-italic relative shrink-0 text-[#2c2c2c] text-[8px] text-nowrap tracking-[-0.24px] whitespace-pre">Expand</p>
      <Frame2 />
    </div>
  );
}

function Frame1() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        scale: 1.05,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, []);
  
  return (
    <div ref={ref} className="absolute bg-white box-border content-stretch flex gap-[10px] items-start left-[204px] overflow-clip px-[8px] py-[3px] rounded-[30px] top-[189px] cursor-pointer hover:bg-gray-100 transition-colors">
      <Frame3 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[21.43%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p6538100} fill="var(--fill-0, #1A7B7F)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p75c7b00} fill="var(--fill-0, #1A7B7F)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.8, delay: 0.3, ease: "back.out(1.7)" }
      );
    }
  }, []);
  
  return (
    <div ref={ref} className="absolute bg-[#b1d2d3] left-[13px] overflow-clip rounded-[46.667px] size-[28px] top-[14px]">
      <Group />
    </div>
  );
}

function Frame9() {
  return <div className="absolute h-[112px] left-[14px] top-[55px] w-[34px]" />;
}

function MaskGroup() {
  return <div className="absolute contents inset-[38.21%_84.52%_40.15%_4.95%]" data-name="Mask group" />;
}

function Group1() {
  return (
    <div className="absolute contents inset-[38.21%_84.52%_40.15%_4.95%]" data-name="Group">
      <div className="absolute inset-[39.08%_85.2%_40.96%_5.61%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 53">
          <path d={svgPaths.p212bb4a0} fill="var(--fill-0, #DC6B6F)" id="Vector" />
        </svg>
      </div>
      <MaskGroup />
    </div>
  );
}

function EosIconsThreeDotsLoading() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });
    
    dotsRef.current.forEach((dot, index) => {
      if (dot) {
        timeline.to(dot, {
          y: -8,
          duration: 0.4,
          ease: "power2.out"
        }, index * 0.15);
        
        timeline.to(dot, {
          y: 0,
          duration: 0.4,
          ease: "bounce.out"
        }, index * 0.15 + 0.4);
      }
    });
  }, []);
  
  return (
    <div ref={containerRef} className="absolute left-[194px] flex gap-1.5 items-center justify-center w-[24px] h-[24px] top-[11px]">
      <div 
        ref={el => { if (el) dotsRef.current[0] = el; }}
        className="w-1.5 h-1.5 rounded-full bg-[#1A7B7F]"
      />
      <div 
        ref={el => { if (el) dotsRef.current[1] = el; }}
        className="w-1.5 h-1.5 rounded-full bg-[#1A7B7F]"
      />
      <div 
        ref={el => { if (el) dotsRef.current[2] = el; }}
        className="w-1.5 h-1.5 rounded-full bg-[#1A7B7F]"
      />
    </div>
  );
}

function MaterialSymbolsCall() {
  return (
    <div className="absolute left-[9px] size-[16px] top-[9px]" data-name="material-symbols:call">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:call">
          <path d={svgPaths.peefd800} fill="var(--fill-0, #6CA9AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#f8f8f8] overflow-clip relative rounded-[7.727px] shrink-0 size-[34px]">
      <MaterialSymbolsCall />
    </div>
  );
}

function Frame22() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Quattrocento_Sans:Bold',sans-serif] items-start leading-[16px] not-italic pb-[4px] pt-0 px-0 relative shrink-0 w-[39px]">
      <p className="relative shrink-0 text-[7px] text-[rgba(44,44,44,0.5)] tracking-[-0.21px] w-full">called</p>
      <p className="relative shrink-0 text-[12px] text-[rgba(44,44,44,0.74)] tracking-[-0.36px] w-full">12 times</p>
    </div>
  );
}

function Frame23() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.6, delay: 1.2 }
      );
    }
  }, []);
  
  return (
    <div ref={ref} className="absolute content-stretch flex gap-[6px] items-center left-[136px] top-[55px]">
      <Frame12 />
      <Frame22 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[34px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Frame 65">
          <rect fill="var(--fill-0, #FEF2F2)" height="34" rx="7.72727" width="34" />
          <path d={svgPaths.p63e3680} fill="var(--fill-0, #DC6B6F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Quattrocento_Sans:Bold',sans-serif] items-center justify-center leading-[16px] not-italic pb-[4px] pt-0 px-0 relative shrink-0 w-[65px]">
      <p className="relative shrink-0 text-[7px] text-[rgba(44,44,44,0.5)] tracking-[-0.21px] w-full">persona</p>
      <p className="relative shrink-0 text-[12px] text-[rgba(44,44,44,0.73)] tracking-[-0.36px] w-full">Police Officer</p>
    </div>
  );
}

function Frame21() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.6, delay: 1.6 }
      );
    }
  }, []);
  
  return (
    <div ref={ref} className="absolute content-stretch flex gap-[6px] items-center justify-center left-[136px] top-[133px]">
      <Frame8 />
      <Frame20 />
    </div>
  );
}

function MynauiDangerDiamondSolid() {
  return (
    <div className="absolute left-[5px] size-[24px] top-[5px]" data-name="mynaui:danger-diamond-solid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mynaui:danger-diamond-solid">
          <path d={svgPaths.p2621a580} fill="var(--fill-0, #6CA9AC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#f8f8f8] overflow-clip relative rounded-[7.727px] shrink-0 size-[34px]">
      <MynauiDangerDiamondSolid />
    </div>
  );
}

function Frame24() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Quattrocento_Sans:Bold',sans-serif] items-start leading-[16px] not-italic pb-[4px] pt-0 px-0 relative shrink-0 w-[39px]">
      <p className="relative shrink-0 text-[7px] text-[rgba(44,44,44,0.5)] tracking-[-0.21px] w-full">called</p>
      <p className="relative shrink-0 text-[12px] text-[rgba(44,44,44,0.74)] tracking-[-0.36px] w-full">12 times</p>
    </div>
  );
}

function Frame25() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.6, delay: 1.4 }
      );
    }
  }, []);
  
  return (
    <div ref={ref} className="absolute content-stretch flex gap-[6px] items-center justify-center left-[136px] top-[94px]">
      <Frame14 />
      <Frame24 />
    </div>
  );
}

function PercentageNumber() {
  const ref = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { innerText: 0 },
        {
          innerText: 92,
          duration: 2.5,
          delay: 0.5,
          ease: "power2.out",
          snap: { innerText: 1 },
          onUpdate: function() {
            if (ref.current) {
              ref.current.textContent = Math.round(parseFloat(ref.current.textContent || "0")).toString();
            }
          }
        }
      );
    }
  }, []);
  
  return (
    <p ref={ref} className="absolute font-['Quattrocento_Sans:Bold',sans-serif] leading-[70.667px] left-[calc(50%-98.5px)] not-italic text-[#dc6b6f] text-[45.429px] text-nowrap top-[78px] tracking-[-3px] whitespace-pre">
      0
    </p>
  );
}

function Container3() {
  // Remove animations - show immediately
  return (
    <div className="absolute bg-white h-[264px] left-[19px] overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[91px] w-[283px]" data-name="Container">
      <Frame4 />
      <Frame6 />
      <Frame1 />
      <Frame5 />
      <p className="absolute font-['Quattrocento_Sans:Bold',sans-serif] leading-[15.027px] left-[49px] not-italic text-[9.66px] text-[rgba(26,123,127,0.34)] top-[29px] tracking-[-0.483px] w-[129px]">Analyzing potential scam</p>
      <Frame9 />
      <PercentageNumber />
      <div className="absolute inset-[23.86%_58.41%_40.93%_5.61%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102 93">
          <path d={svgPaths.p59fb370} fill="var(--fill-0, #E5E5EA)" id="Vector" />
        </svg>
      </div>
      <Group1 />
      <p className="absolute font-['Quattrocento_Sans:Bold',sans-serif] leading-[15.027px] left-[52px] not-italic text-[9.66px] text-[rgba(220,107,111,0.44)] text-nowrap top-[131px] tracking-[-0.483px] whitespace-pre">percent</p>
      <Frame23 />
      <Frame21 />
      <Frame25 />
    </div>
  );
}

function Frame28() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.8, delay: 0.5, ease: "back.out(1.7)" }
      );
    }
  }, []);
  
  return (
    <div ref={ref} className="absolute left-[13px] size-[28px] top-[9px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Frame 62">
          <rect fill="var(--fill-0, #B1D2D3)" height="28" rx="14" width="28" />
          <path d={svgPaths.peeb0080} id="Vector" stroke="var(--stroke-0, #1A7B7F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.52938" />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 size-[10px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Frame 59">
          <rect fill="var(--fill-0, white)" fillOpacity="0.48" height="10" rx="5" width="10" />
          <path clipRule="evenodd" d={svgPaths.p35f2e400} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Quattrocento_Sans:Regular',sans-serif] leading-[12.942px] not-italic relative shrink-0 text-[8px] text-nowrap text-white tracking-[-0.24px] whitespace-pre">Expand</p>
      <Frame29 />
    </div>
  );
}

function Frame15() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        scale: 1.05,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, []);
  
  return (
    <div ref={ref} className="absolute bg-[#1a7b7f] box-border content-stretch flex gap-[10px] items-start left-[191px] overflow-clip px-[8px] py-[3px] rounded-[30px] top-[7px] cursor-pointer hover:bg-[#156569] transition-colors">
      <Frame30 />
    </div>
  );
}

function Frame31() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 1 }
      );
    }
  }, []);
  
  return (
    <div ref={ref} className="absolute bg-[#f8f8f8] bottom-[16px] h-[134px] left-[calc(50%-1px)] overflow-clip rounded-[10px] translate-x-[-50%] w-[255px]">
      <Frame15 />
    </div>
  );
}

function Group2() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Group">
      <div className="absolute inset-[-6.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <g id="Group">
            <path d={svgPaths.p1927100} id="Vector" stroke="var(--stroke-0, #F8F8F8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.11111" />
            <path d="M4.11111 2.77778V5H6.33333" id="Vector_2" stroke="var(--stroke-0, #F8F8F8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.11111" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute content-stretch flex gap-[3px] items-center left-[49px] top-[27px]">
      <Group2 />
      <p className="font-['Quattrocento_Sans:Regular',sans-serif] leading-[12.942px] not-italic relative shrink-0 text-[#f8f8f8] text-[8px] text-nowrap tracking-[-0.24px] whitespace-pre">1:34 elapsed</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-red-50 box-border content-stretch flex gap-[2px] items-center justify-center overflow-clip px-[8px] py-px relative rounded-[30px] shrink-0">
      <p className="font-['Quattrocento_Sans:Regular',sans-serif] leading-[12.942px] not-italic relative shrink-0 text-[#dc6b6f] text-[8px] text-nowrap tracking-[-0.24px] whitespace-pre">SSN</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-red-50 box-border content-stretch flex gap-[2px] items-center justify-center overflow-clip px-[8px] py-px relative rounded-[30px] shrink-0">
      <p className="font-['Quattrocento_Sans:Regular',sans-serif] leading-[12.942px] not-italic relative shrink-0 text-[#dc6b6f] text-[8px] text-nowrap tracking-[-0.24px] whitespace-pre">Name</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-red-50 box-border content-stretch flex gap-[2px] items-center justify-center overflow-clip px-[8px] py-px relative rounded-[30px] shrink-0">
      <p className="font-['Quattrocento_Sans:Regular',sans-serif] leading-[12.942px] not-italic relative shrink-0 text-[#dc6b6f] text-[8px] text-nowrap tracking-[-0.24px] whitespace-pre">Date of Birth</p>
    </div>
  );
}

function Frame11() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current.children,
        { opacity: 0, scale: 0.8, y: -10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.1, delay: 1.3 }
      );
    }
  }, []);
  
  return (
    <div ref={ref} className="absolute content-stretch flex gap-[4px] items-center left-[13px] top-[65px]">
      <Frame33 />
      <Frame34 />
      <Frame10 />
    </div>
  );
}

function Frame35() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        opacity: 0.3,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, []);
  
  return <div ref={ref} className="bg-[rgba(211,177,178,0.48)] rounded-[12px] shrink-0 size-[6px]" />;
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame35 />
      <p className="font-['Quattrocento_Sans:Regular',sans-serif] leading-[12.942px] not-italic relative shrink-0 text-[#2c2c2c] text-[8px] text-nowrap tracking-[-0.24px] whitespace-pre">live</p>
    </div>
  );
}

function Frame37() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        scale: 1.05,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, []);
  
  return (
    <div ref={ref} className="absolute bg-white box-border content-stretch flex gap-[10px] items-start left-[225px] overflow-clip px-[8px] py-[3px] rounded-[30px] top-[11px]">
      <Frame36 />
    </div>
  );
}

// Old hardcoded transcript bubbles removed - now using TranscriptDisplay component

function ActionButtons({ onIntercept, onNotScam }: { onIntercept: () => void; onNotScam: () => void }) {
  return (
    <div style={{ position: 'absolute', width: '240px', display: 'flex', zIndex: 10, top: '471px', left: '50%', transform: 'translateX(-50%)', gap: '12px' }}>
      {/* Intercept Call Button */}
      <button
        onClick={onIntercept}
        style={{ 
          flex: 1,
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          background: 'linear-gradient(135deg, #dc6b6f 0%, #e88b8f 100%)',
          boxShadow: '0 4px 12px rgba(220, 107, 111, 0.3)',
          paddingLeft: '16px',
          paddingRight: '16px',
          height: '36px'
        }}
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(220, 107, 111, 0.3)'}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(220, 107, 111, 0.3)'}
      >
        <p className="font-['Quattrocento_Sans:Bold',sans-serif]" style={{ fontSize: '10px', color: 'white' }}>
          Intercept Call
        </p>
      </button>
      
      {/* Not a Scam Button */}
      <button
        onClick={onNotScam}
        style={{ 
          flex: 1,
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s',
          background: 'white',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          border: '1.5px solid #1a7b7f',
          paddingLeft: '16px',
          paddingRight: '16px',
          height: '36px'
        }}
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)'}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'}
      >
        <p className="font-['Quattrocento_Sans:Bold',sans-serif]" style={{ fontSize: '10px', color: '#1a7b7f' }}>
          Not a Scam
        </p>
      </button>
    </div>
  );
}

function SeeReportButton({ onClick }: { onClick: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { scale: 1 },
        { scale: 1.05, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut" }
      );
    }
  }, []);
  
  return (
    <button
      ref={ref}
      onClick={onClick}
      style={{ 
        position: 'absolute',
        left: '19px',
        top: '471px',
        borderRadius: '12px',
        width: '283px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        zIndex: 10,
        border: '1px solid rgba(255, 255, 255, 0.2)',
        background: 'linear-gradient(135deg, #1a7b7f 0%, #509193 100%)',
        boxShadow: '0 4px 12px rgba(26, 123, 127, 0.3)'
      }}
      onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(26, 123, 127, 0.3)'}
      onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 12px rgba(26, 123, 127, 0.3)'}
    >
      <p className="font-['Quattrocento_Sans:Bold',sans-serif]" style={{ fontSize: '12px', color: 'white' }}>
        See Full Report
      </p>
      <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24">
        <path d="M9 5l7 7-7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function NotificationScreen({ onTap }: { onTap: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.3, ease: "back.out(1.2)" }
      );
    }
  }, []);
  
  // Get current time
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: false });
  const dateString = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  
  return (
    <div 
      style={{ 
        width: '375px', 
        height: '667px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Android Status Bar */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        height: '24px', 
        background: 'rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 12px',
        fontSize: '11px',
        color: 'white'
      }}>
        <span style={{ fontWeight: '500' }}>{timeString}</span>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          {/* WiFi icon */}
          <svg style={{ width: '14px', height: '14px' }} fill="white" viewBox="0 0 24 24">
            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
          </svg>
          {/* Battery icon */}
          <svg style={{ width: '18px', height: '14px' }} fill="white" viewBox="0 0 24 24">
            <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
          </svg>
        </div>
      </div>
      
      {/* Large Clock Widget */}
      <div style={{ 
        position: 'absolute',
        top: '80px',
        left: '24px',
        right: '24px'
      }}>
        <p className="font-['Quattrocento_Sans:Bold',sans-serif]" style={{ 
          fontSize: '64px', 
          color: 'white',
          fontWeight: '300',
          lineHeight: '1',
          marginBottom: '8px'
        }}>
          {timeString}
        </p>
        <p className="font-['Quattrocento_Sans:Regular',sans-serif]" style={{ 
          fontSize: '18px', 
          color: 'rgba(255, 255, 255, 0.9)'
        }}>
          {dateString}
        </p>
      </div>
      
      {/* Notification Banner */}
      <div
        ref={ref}
        onClick={onTap}
        style={{ 
          position: 'absolute',
          left: '16px',
          right: '16px',
          top: '220px',
          padding: '12px 14px',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          transition: 'transform 0.2s',
          zIndex: 20
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          {/* App Icon */}
          <div 
            style={{ 
              borderRadius: '8px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              background: 'linear-gradient(135deg, #1a7b7f 0%, #509193 100%)'
            }}
          >
            <svg style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="white"/>
            </svg>
          </div>
          
          {/* Notification Content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <p className="font-['Quattrocento_Sans:Bold',sans-serif]" style={{ fontSize: '13px', color: '#000' }}>
                Guardian
              </p>
              <p className="font-['Quattrocento_Sans:Regular',sans-serif]" style={{ fontSize: '10px', color: '#999' }}>
                now
              </p>
            </div>
            <p className="font-['Quattrocento_Sans:Bold',sans-serif]" style={{ fontSize: '12px', color: '#333', marginBottom: '2px' }}>
              Suspicious call detected
            </p>
            <p className="font-['Quattrocento_Sans:Regular',sans-serif]" style={{ fontSize: '11px', color: '#666' }}>
              Tap to view live analysis
            </p>
          </div>
        </div>
      </div>
      
      {/* App Icons Grid */}
      <div style={{
        position: 'absolute',
        bottom: '120px',
        left: '24px',
        right: '24px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px'
      }}>
        {['Phone', 'Messages', 'Chrome', 'Camera', 'Photos', 'Maps', 'Gmail', 'Settings'].map((appName, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.3)' }} />
            </div>
            <p className="font-['Quattrocento_Sans:Regular',sans-serif]" style={{ 
              fontSize: '10px', 
              color: 'white',
              textAlign: 'center'
            }}>
              {appName}
            </p>
          </div>
        ))}
      </div>
      
      {/* Android Navigation Bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '48px',
        background: 'rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '0 60px'
      }}>
        {/* Back button */}
        <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid rgba(255, 255, 255, 0.8)' }} />
        {/* Home button */}
        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.8)' }} />
        {/* Recent apps button */}
        <div style={{ width: '24px', height: '20px', border: '2px solid rgba(255, 255, 255, 0.8)', borderRadius: '4px' }} />
      </div>
    </div>
  );
}

function ReportScreen({ onBack }: { onBack: () => void }) {
  return (
    <div style={{ background: '#f6f6f6', position: 'relative', overflowY: 'auto', width: '375px', height: '667px' }}>
      {/* Back button */}
      <button
        onClick={onBack}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 20,
          background: 'white',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          cursor: 'pointer',
          border: 'none',
          transition: 'background 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
      >
        <svg style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7" stroke="#1a7b7f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      
      <Frame13 />
      <Container3 />
    </div>
  );
}

function InterceptNotification({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "back.out(1.2)" }
      );
    }
  }, []);
  
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: '19px',
        top: '471px',
        width: '283px',
        background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
        borderRadius: '12px',
        padding: '14px 16px',
        boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 20
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Checkmark icon */}
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <svg style={{ width: '18px', height: '18px' }} fill="none" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        
        <div>
          <p className="font-['Quattrocento_Sans:Bold',sans-serif]" style={{ 
            fontSize: '13px', 
            color: 'white',
            marginBottom: '2px'
          }}>
            Call Intercepted
          </p>
          <p className="font-['Quattrocento_Sans:Regular',sans-serif]" style={{ 
            fontSize: '10px', 
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Scammer blocked successfully
          </p>
        </div>
      </div>
      
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          border: 'none',
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          flexShrink: 0
        }}
      >
        <svg style={{ width: '12px', height: '12px' }} fill="none" viewBox="0 0 24 24">
          <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

export default function IPhoneSe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentScreen, setCurrentScreen] = useState<'notification' | 'transcript' | 'report'>('notification');
  const [intercepted, setIntercepted] = useState(false);
  const [showInterceptNotification, setShowInterceptNotification] = useState(false);
  
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );
    }
  }, []);
  
  useEffect(() => {
    if (showInterceptNotification) {
      // Auto-hide after 2 seconds
      const timer = setTimeout(() => {
        setShowInterceptNotification(false);
        setIntercepted(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [showInterceptNotification]);
  
  const handleIntercept = () => {
    setShowInterceptNotification(true);
    console.log('Call intercepted!');
  };
  
  const handleCloseNotification = () => {
    setShowInterceptNotification(false);
    setIntercepted(true);
  };
  
  const handleNotScam = () => {
    console.log('Marked as not a scam');
    // Could add a confirmation or close action here
  };
  
  // Screen routing
  if (currentScreen === 'notification') {
    return <NotificationScreen onTap={() => setCurrentScreen('transcript')} />;
  }
  
  if (currentScreen === 'report') {
    return <ReportScreen onBack={() => setCurrentScreen('transcript')} />;
  }
  
  // Transcript screen (main view)
  return (
    <div ref={containerRef} style={{ background: '#f6f6f6', position: 'relative', overflowY: 'auto', width: '375px', height: '667px' }} data-name="iPhone SE - 2">
      <Frame13 />
      
      {/* Show intercept notification, then action buttons, then see report button */}
      {showInterceptNotification ? (
        <InterceptNotification onClose={handleCloseNotification} />
      ) : !intercepted ? (
        <ActionButtons onIntercept={handleIntercept} onNotScam={handleNotScam} />
      ) : (
        <SeeReportButton onClick={() => setCurrentScreen('report')} />
      )}
      
      <TranscriptDisplay websocketUrl={WEBSOCKET_URL} />
    </div>
  );
}