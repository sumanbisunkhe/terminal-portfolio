"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

type TypewriterProps = { 
  text: string; 
  onComplete?: () => void;
  speed?: number;
  showCursor?: boolean;
};

export default function Typewriter({ 
  text, 
  onComplete, 
  speed = 1,
  showCursor = false 
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const indexRef = useRef(0);
  const completedRef = useRef(false);

  useEffect(() => {
    // If already completed, just show the full text immediately
    if (completedRef.current) {
      setDisplayedText(text);
      setIsComplete(true);
      return;
    }

    // Reset on text change
    setDisplayedText("");
    setIsComplete(false);
    indexRef.current = 0;

    const typeNextChar = () => {
      if (indexRef.current < text.length) {
        const char = text[indexRef.current];
        
        // Human-like typing speed variations
        const baseSpeed = 40 / speed;
        const isPunctuation = /[.,!?;:]/.test(char);
        const isSpace = char === ' ';
        const isNewline = char === '\n';
        
        let delay = baseSpeed + Math.random() * 30;
        
        if (isPunctuation) delay += 200;
        if (isSpace) delay += 20;
        if (isNewline) delay += 100;

        setTimeout(() => {
          setDisplayedText(text.slice(0, indexRef.current + 1));
          indexRef.current++;
          typeNextChar();
        }, delay);
      } else {
        setIsComplete(true);
        completedRef.current = true;
        onComplete?.();
      }
    };

    typeNextChar();
  }, [text, speed]); // Removed onComplete from deps to prevent re-runs

  return (
    <span className="inline-block font-mono" style={{ whiteSpace: 'pre-wrap' }}>
      {displayedText}
      {showCursor && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.7, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="inline-block w-2 h-5 bg-green-400 ml-0.5 align-middle"
          style={{ 
            boxShadow: '0 0 8px rgba(74, 222, 128, 0.8)',
            verticalAlign: 'text-bottom'
          }}
        />
      )}
    </span>
  );
}
