"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";

const CouponCard = ({ text, isOpen, onClick, isHidden }) => {
  if (isHidden) return null;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      className="w-full h-40 cursor-pointer group focus-visible:ring-4 focus-visible:ring-rose-400 focus:outline-none rounded-xl"
      style={{ perspective: '1000px' }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div
        className="relative w-full h-full duration-500 transition-transform"
        style={{
          transformStyle: 'preserve-3d',
          transform: isOpen ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >

        {/* Front */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-rose-400 to-rose-600 rounded-xl shadow-lg flex items-center justify-center p-4 border-4 border-white transform transition-transform group-hover:scale-105"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <span className="text-white font-bold text-2xl">🎁 Tap for Reward</span>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center p-4 border-4 border-rose-400"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <span className="text-rose-600 font-bold text-lg md:text-xl text-center">{text}</span>
        </div>

      </div>
    </div>
  );
};

export default function Home() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noBtnStyle, setNoBtnStyle] = useState({});
  const [isClient, setIsClient] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [openCouponIndex, setOpenCouponIndex] = useState(null);

  const coupons = [
    "🍣 Sushi Date (I promise not to steal your rolls)",
    "🎬 Movie Night (You pick, I pretend to like it)",
    "🧞 You get to be the boss for a whole 24 hours (Use wisely)",
  ];

  const handleCouponClick = (index) => {
    if (openCouponIndex === index) {
      setOpenCouponIndex(null); // Close if already open
    } else {
      setOpenCouponIndex(index); // Open clicked one
    }
  };

  useEffect(() => {
    setIsClient(true);

    // Timer logic
    const startDate = new Date("2025-03-18T00:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeElapsed({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleYesClick = () => {
    setYesPressed(true);

    const sushiShape = confetti.shapeFromText({ text: '🍣', scalar: 2 });

    // Initial explosion
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      shapes: [sushiShape],
      scalar: 2
    });

    // Continuous confetti for a few seconds
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      // launch a few confetti from the left edge
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        shapes: [sushiShape],
        scalar: 2
      });
      // and launch a few from the right edge
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        shapes: [sushiShape],
        scalar: 2
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleNoHover = () => {
    if (!isClient) return;
    const buttonWidth = 150; // approximate width
    const buttonHeight = 50; // approximate height

    // Calculate boundaries to keep it on screen
    const x = Math.random() * (window.innerWidth - buttonWidth);
    const y = Math.random() * (window.innerHeight - buttonHeight);

    setNoBtnStyle({
      position: 'fixed', // Use fixed to position relative to viewport
      left: `${x}px`,
      top: `${y}px`,
      transition: 'all 0.2s ease',
      zIndex: 50, // Ensure it sits on top of everything
    });
  };

  const placeholderImages = [
    "/IMG_8262.jpeg",
    "/IMG_8364.jpeg",
    "/IMG_8373.jpeg",
    "/IMG_8383.jpeg",
    "/IMG_8518.jpeg",
    "/IMG_8587.jpeg",
    "/IMG_8793.jpeg",
    "/IMG_9293.jpeg",
    "/IMG_9295.jpeg",
    "/IMG_9296.jpeg",
    "/IMG_9299.jpeg",
    "/IMG_9378.jpeg",
    "/IMG_9471.jpeg",
    "/IMG_9535.jpeg",
    "/IMG_9538.jpeg",
    "/IMG_9539.jpeg",
    "/IMG_9540.jpeg",
    "/IMG_9752.jpeg",
    "/IMG_9948.jpeg"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden text-center bg-gradient-to-br from-pink-100 via-rose-200 to-red-100 selection:bg-rose-300 pointer-events-auto">
      {!yesPressed ? (
        <div className="flex flex-col items-center gap-8 max-w-lg w-full relative z-10 transition-all duration-500 ease-in-out">

          {/* Hero Image */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl hover:scale-105 transition-transform duration-300">
            <Image
              src="/Untitled design.png"
              alt="Funny Valentin"
              fill
              className="object-contain rounded-2xl"
              priority
            />
          </div>

          {/* Main Text */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-rose-600 drop-shadow-sm animate-pulse font-serif italic">
            Julie, will you be my Valentine? (Saying no is illegal)
          </h1>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-6 mt-4 w-full justify-center relative min-h-[100px]">
            <button
              onClick={handleYesClick}
              className="px-10 py-5 text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-green-400 to-green-600 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none ring-4 ring-green-200"
            >
              YES! 💖
            </button>

            <button
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover} // For mobile interaction
              style={noBtnStyle}
              className="px-6 py-3 text-lg font-semibold text-white bg-gray-400 rounded-full shadow-md hover:bg-gray-500 cursor-pointer transition-all duration-200"
            >
              No 😢
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full max-w-5xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-rose-600 mb-8 drop-shadow-md">
            YAY! 🎈 You made the right choice. (The &apos;No&apos; button was broken anyway) 🎈
          </h1>

          <div className="text-2xl mb-8 text-rose-800 font-medium font-serif italic">
            &quot;Every moment with you is my favorite. Here is proof we are obsessed with each other.&quot; 💖
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 w-full px-4 mb-12">
            {placeholderImages.map((src, index) => (
              <div key={index} className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-xl border-4 border-white transform transition duration-300 hover:rotate-1 hover:scale-105">
                <Image
                  src={src}
                  alt={`Memory ${index + 1}`}
                  width={500}
                  height={500}
                  className="w-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold text-xl">❤️</span>
                </div>
              </div>
            ))}
          </div>

          {/* Love Coupons */}
          <div className="w-full px-4 mb-12">
            <h2 className="text-3xl font-bold text-rose-600 mb-8 font-serif">Your Valentine&apos;s Gifts 🎁</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {coupons.map((text, index) => (
                <div key={index} className="w-full max-w-xs">
                  <CouponCard
                    text={text}
                    isOpen={openCouponIndex === index}
                    onClick={() => handleCouponClick(index)}
                    isHidden={openCouponIndex !== null && openCouponIndex !== index}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl w-full max-w-2xl border-4 border-rose-200">
            <h2 className="text-3xl font-bold text-rose-600 mb-4 font-serif">I&apos;ve loved you for:</h2>
            <div className="text-2xl md:text-4xl font-mono text-rose-800 font-bold tracking-wider">
              {timeElapsed.days} Days, {timeElapsed.hours} Hours, {timeElapsed.minutes} Minutes, and {timeElapsed.seconds} Seconds
            </div>
          </div>

          <button
            onClick={() => window.location.reload()}
            className="mt-12 px-8 py-3 bg-white text-rose-500 font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
