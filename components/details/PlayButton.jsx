"use client";
import { useState } from "react";

const PlayButton = ({ trailer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-white text-black px-8  rounded-lg font-bold hover:bg-opacity-80"
      >
        ▶ Play
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="bg-black p-4 rounded-lg max-w-3xl w-full relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
            <div>
              {" "}
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${trailer}`}
                allowFullScreen
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlayButton;
