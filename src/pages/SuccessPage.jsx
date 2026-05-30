import React from "react";
import T from "../theme";

export default function SuccessPage({ setPage }) {
  return (
    <div style={{
      textAlign: "center",
      padding: "48px 20px",
      background: T.bg,
      minHeight: "100vh",
    }}>
      <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>

      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, marginBottom: 8 }}>
        Order placed!
      </h2>

      <div style={{
        background: T.greenPale,
        color: T.greenD,
        fontSize: 13,
        fontWeight: 500,
        padding: "8px 18px",
        borderRadius: 20,
        display: "inline-block",
        marginBottom: 16,
      }}>
        Order #FM-20240516
      </div>

      <p style={{ fontSize: 14, color: T.muted, marginBottom: 24 }}>
        Your groceries are being packed.<br />
        Estimated delivery: <strong>25–30 minutes</strong>.
      </p>

      <button
        onClick={() => setPage("home")}
        style={{
          background: T.green,
          color: "#fff",
          border: "none",
          borderRadius: 12,
          padding: "10px 24px",
          fontSize: 14,
          fontWeight: 500,
          cursor: "pointer",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Continue shopping →
      </button>
    </div>
  );
}
