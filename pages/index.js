import { useState, useEffect } from 'react';
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';
import Intro from '../components/Intro';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Chatbot from '../components/Chatbot';
import EasterEgg from '../components/EasterEgg';
import DarkModeToggle from '../components/DarkModeToggle';
import AnimatedBackground from '../components/AnimatedBackground';
import TextToSpeech from '../components/TextToSpeech';
import QRCodeGenerator from '../components/QRCodeGenerator';

export default function Home() {
  const [simplifiedMode, setSimplifiedMode] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Add any initialization logic here
  }, []);

  return (
    <ParallaxProvider>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <Head>
          <title>Dale Rothauge - Dynamic Resume</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <AnimatedBackground />

        <main className="container mx-auto px-4 relative z-10">
          <div className="fixed top-4 right-4 flex space-x-4">
            <button
              onClick={() => setSimplifiedMode(!simplifiedMode)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {simplifiedMode ? 'Interactive Mode' : 'Simplified Mode'}
            </button>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          <Intro simplifiedMode={simplifiedMode} />
          <Profile simplifiedMode={simplifiedMode} />
          <Experience simplifiedMode={simplifiedMode} />
          <Skills simplifiedMode={simplifiedMode} />
          <Projects simplifiedMode={simplifiedMode} />
          
          {!simplifiedMode && (
            <>
              <Chatbot />
              <TextToSpeech />
              <QRCodeGenerator />
            </>
          )}
          
          <button
            onClick={() => setShowEasterEgg(!showEasterEgg)}
            className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            🥚
          </button>
          
          {showEasterEgg && <EasterEgg />}
        </main>
      </div>
    </ParallaxProvider>
  );
}