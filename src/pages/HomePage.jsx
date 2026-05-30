import React from "react";
import { useState, useEffect, useRef } from "react";
import { PRODUCTS, CATEGORIES } from "../data/products";
import ProductCard from "../components/ProductCard";
import T from "../theme";

const videos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video4.mp4",
  "/videos/video5.mp4",
];

export default function HomePage({
  setPage,
  setDetailProduct,
  addToCart,
}) {
  const [activeCat, setActiveCat] = useState("all");
  const [currentVideo, setCurrentVideo] = useState(0);

  const videoRef = useRef(null);

  const filtered =
    activeCat === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.cat === activeCat);

  // Next video
  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  // Reload video when changed
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentVideo]);

  return (
    <div style={{ background: T.bg, minHeight: "100vh" }}>

      {/* HERO SECTION */}
      <div
        style={{
          position: "relative",
          padding: "32px 20px",
          overflow: "hidden",
          minHeight: 280,
          display: "flex",
          alignItems: "center",
        }}
      >

        {/* VIDEO BACKGROUND */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source
            src={videos[currentVideo]}
            type="video/mp4"
          />
        </video>

        {/* DARK OVERLAY */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.55)",
            zIndex: 1,
          }}
        />

        {/* HERO TEXT */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: T.amber,
              color: "#fff",
              fontSize: 11,
              fontWeight: 500,
              padding: "3px 10px",
              borderRadius: 12,
              marginBottom: 10,
            }}
          >
            Farm fresh delivery
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 28,
              color: "#fff",
              lineHeight: 1.25,
              marginBottom: 8,
            }}
          >
            Groceries,
            <br />
            fresh to your
            <br />
            door
          </h1>

          <p
            style={{
              color: "#B7E4C7",
              fontSize: 13,
              marginBottom: 16,
            }}
          >
            Free delivery on orders above ₹499.
            <br />
            Delivered in 30 minutes.
          </p>

          <button
            onClick={() => setPage("detail")}
            style={{
              background: "#fff",
              color: T.green,
              fontSize: 13,
              fontWeight: 500,
              padding: "9px 20px",
              borderRadius: 20,
              border: "none",
              cursor: "pointer",
            }}
          >
            Shop now →
          </button>
        </div>

        {/* VIDEO DOTS */}
        <div
          style={{
            position: "absolute",
            bottom: 12,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 6,
            zIndex: 3,
          }}
        >
          {videos.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentVideo(i)}
              style={{
                width: i === currentVideo ? 20 : 8,
                height: 8,
                borderRadius: 4,
                background:
                  i === currentVideo
                    ? "#fff"
                    : "rgba(255,255,255,0.4)",
                cursor: "pointer",
                transition: "0.3s",
              }}
            />
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <div
        style={{
          display: "flex",
          gap: 8,
          overflowX: "auto",
          padding: "16px 20px 8px",
          scrollbarWidth: "none",
        }}
      >
        {CATEGORIES.map((c) => (
          <div
            key={c.id}
            onClick={() => setActiveCat(c.id)}
            style={{
              flexShrink: 0,
              background:
                activeCat === c.id
                  ? T.greenPale
                  : "#fff",
              border: `1px solid ${
                activeCat === c.id
                  ? T.green
                  : T.border
              }`,
              borderRadius: 14,
              padding: "8px 14px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              cursor: "pointer",
            }}
          >
            <div style={{ fontSize: 22 }}>
              {c.em}
            </div>

            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
              }}
            >
              {c.label}
            </div>
          </div>
        ))}
      </div>

      {/* PROMO */}
      <div
        style={{
          margin: "0 20px 8px",
          background: T.amberPale,
          borderRadius: 12,
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #FFD8A8",
        }}
      >
        <p
          style={{
            fontSize: 13,
            color: "#7C3D00",
          }}
        >
          Use code{" "}
          <strong style={{ color: T.amber }}>
            FRESH20
          </strong>{" "}
          — get 20% off your first order!
        </p>

        <button
          style={{
            background: "transparent",
            border: `1.5px solid ${T.amber}`,
            color: T.amber,
            fontSize: 12,
            fontWeight: 500,
            padding: "6px 14px",
            borderRadius: 16,
            cursor: "pointer",
          }}
        >
          Claim
        </button>
      </div>

      {/* PRODUCTS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(155px, 1fr))",
          gap: 12,
          padding: "8px 20px 32px",
        }}
      >
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onClick={() => {
              setDetailProduct(p);
              setPage("detail");
            }}
            onAdd={() => addToCart(p)}
          />
        ))}
      </div>
    </div>
  );
}