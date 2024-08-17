import React, { useEffect, useState } from 'react';

export default function TextToSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
      setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
    }
  };

  return (
    <button
      onClick={() => speak("Hello, I'm Dale Rothauge. Welcome to my interactive resume!")}
      className="fixed bottom-16 left-4 bg-blue-500 text-white px-4 py-2 rounded"
      disabled={isSpeaking}
    ></button>
  );
}