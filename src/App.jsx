import { Navigate, Route, Routes } from "react-router";
import Navbar from "@/components/Navbar";
import { navigation } from "@/constants";
import { Home } from "@/pages";
import React from "react";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import { soundoff, soundon } from "./assets/icons";
import sakura from "./assets/sakura.mp3";

const App = () => {
  const audioRef = React.useRef(null);
  const soundRef = React.useRef(null);
  
  const handleSound = () => {
    if (!soundRef?.current || !audioRef?.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      soundRef.current.src = soundon;
      return;
    }
    soundRef.current.src = soundoff;
    audioRef.current.pause();
    return;
  };

  React.useEffect(() => {
    audioRef.current = new Audio(sakura);
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;

    return () => {
      // Cleanup on unmount
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [soundRef]);

  return (
    <React.Suspense
      fallback={
        <div className="h-screen">
          <Loader R3F={false} />
        </div>
      }
    >
      <Navbar />
      <main>
        <Routes>
          <Route index element={<Home />} />
          {
            // eslint-disable-next-line no-unused-vars
            navigation.map(({ Component, path }, i) => (
              <Route key={i} path={path} element={<Component />} />
            ))
          }
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <button className="fixed bottom-4 right-4 rounded-full">
        <img
          ref={soundRef}
          src={soundoff}
          alt="jukebox"
          onClick={handleSound}
          className="size-10 cursor-pointer object-contain hover:size-12 active:size-10.5 motion-safe:duration-100"
        />
      </button>
      <Footer />
    </React.Suspense>
  );
};

export default App;
