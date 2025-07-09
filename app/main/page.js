"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";

const Page = () => {
  const vidRef = useRef(null);
  const [photos, setPhotos] = useState([]);
  const canvasRef = useRef(null);
  const [bgcolor, setBgColor] = useState("rgba(251, 191, 36, 0.3)");

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (vidRef.current) {
          vidRef.current.srcObject = stream;
          vidRef.current.onloadedmetadata = () => vidRef.current.play();
        }
      })
      .catch(() => {
        alert("🚫 Please allow camera access.");
      });
  }, []);

  const capture = () => {
    const video = vidRef.current;
    if (video) {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataURL = canvas.toDataURL("image/png");
      if (photos.length < 3) {
        setPhotos([...photos, dataURL]);
      }
    }
  };

  const reset = () => setPhotos([]);

const savephotos = async () => {
  if (!canvasRef.current) {
    console.error("Canvas element not found for collage.");
    return;
  }

  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  const photoSize = 150;  // photo size
  const padding = 10;     // inner spacing between photos
  const outerPadding = 20; // outer margin
  const cols = 1;          // force vertical
  const rows = photos.length;

  // calculate canvas size for vertical layout
  canvas.width =
    photoSize + outerPadding * 2;
  canvas.height =
    rows * (photoSize + padding) - padding + outerPadding * 2;

  // fill background
  ctx.fillStyle = bgcolor;  // from your state
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // helper to load images
  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(e);
    });
  };

  const images = [];
  try {
    for (const src of photos) {
      const img = await loadImage(src);
      images.push(img);
    }
  } catch (err) {
    console.error("Failed to load an image", err);
    return;
  }

  // draw each photo vertically
  images.forEach((img, index) => {
    const x = outerPadding;
    const y = outerPadding + index * (photoSize + padding);
    ctx.drawImage(img, x, y, photoSize, photoSize);
  });

  // save as PNG
  canvas.toBlob((blob) => {
    if (blob) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `collage-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } else {
      console.error("Failed to create blob.");
    }
  }, "image/png");
};

  return (
    <>
     <div className="bg-black/60 w-screen">
      <Navbar />
      </div>
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-white px-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8))",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <header className="text-center mb-6">
        <h1 className="text-4xl font-extrabold tracking-wide text-yellow-400 drop-shadow">
          📸 Party Pixels Booth
        </h1>
        <p className="text-lg mt-1 text-gray-300">
          Capture your best moments in style!
        </p>
      </header>

      <div className="flex flex-col gap-6 items-center justify-center p-6 bg-black/60 rounded-lg shadow-xl max-w-3xl w-full">
        {/* Video & Controls */}
        {photos.length < 3 && (
          <div className="flex flex-col gap-4 items-center">
            <video
              ref={vidRef}
              autoPlay
              className="w-full max-w-md h-[38vh] object-cover rounded border-4 border-yellow-400 shadow"
            />
            <div className="flex flex-wrap gap-4">
              <button
                onClick={capture}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded font-bold shadow"
              >
                📸 Capture
              </button>
              <button
                onClick={() => setPhotos(photos.slice(0, -1))}
                disabled={photos.length === 0}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded font-bold shadow disabled:opacity-50"
              >
                🔄 Retake Last
              </button>
              <button
                onClick={reset}
                className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded font-bold shadow"
              >
                ❌ Reset
              </button>
            </div>
          </div>
        )}

        {/* Photos Captured */}
        {photos.length > 0 && (
          <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-bold mb-4 text-yellow-300">
              Captured Shots
            </h2>
            <div className="flex flex-col gap-4 justify-center p-4 rounded" style={{ backgroundColor: bgcolor }}>
              {photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Captured ${index + 1}`}
                  className="w-32 h-32 object-cover rounded shadow"
                />
              ))}
            </div>

            <div className="mt-4 flex flex-col items-center">
              <label className="block text-lg mb-2 text-yellow-200">
                Background Color:
              </label>
              <input
                type="color"
                value={bgcolor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-24 h-10 rounded border border-yellow-400 cursor-pointer"
              />
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <button
                onClick={reset}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded font-bold shadow"
              >
                ❌ Reset
              </button>
              <button
                onClick={savephotos}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-bold shadow"
              >
                💾 Save collage
              </button>
            </div>
              <canvas ref={canvasRef} style={{ display: "none" }} />
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Page;
