"use client";
import React, { useEffect, useState } from "react";

interface Props {
  words?: string[]; // make optional
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseBetween?: number;
  className?: string;
}

const HeroTypewriter: React.FC<Props> = ({
  words = [], // ✅ DEFAULT VALUE ADDED
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseBetween = 1500,
  className = "",
}) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // ✅ safety check before accessing .length
    if (!words || words.length === 0) return;

    const currentWord = words[index % words.length];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => currentWord.substring(0, prev.length - 1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText((prev) => currentWord.substring(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseBetween);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words, typingSpeed, deletingSpeed, pauseBetween]);

  // Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <span className={`${className} inline-flex`}>
      {text}
      <span
        className={`ml-1 font-bold ${
          showCursor ? "opacity-100" : "opacity-0"
        } transition-opacity duration-200`}
      >
        |
      </span>
    </span>
  );
};

export default HeroTypewriter;
