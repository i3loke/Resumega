import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Intro({ simplifiedMode }) {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowImage(true), 1000);
  }, []);

  return (
    <section className="container py-20 text-center">
      <h1 className="text-3xl font-bold mb-4 animate-fade-in-down">Dale Rothauge</h1>
      <h2 className="text-lg font-medium text-gray-600 mb-8 animate-fade-in-up">
        Versatile Professional
      </h2>
      {showImage && (
        <div className="relative w-48 h-48 mx-auto mb-8 animate-fade-in">
          <Image
            src="/profile-picture.jpg"
            alt="Dale Rothauge, a versatile professional"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            priority // For faster image loading
          />
        </div>
      )}
      {!simplifiedMode && (
        <p className="text-lg max-w-2xl mx-auto animate-fade-in">
          Welcome to my interactive resume! Feel free to explore and chat with my AI assistant to learn more about me.
        </p>
      )}
    </section>
  );
}
