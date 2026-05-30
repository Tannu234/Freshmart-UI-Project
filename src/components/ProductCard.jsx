import React from "react";
import { useState } from "react";
import T from "../theme";

export default function ProductCard({ product: p, onClick, onAdd }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "#fff",
        border: `1px solid ${T.border}`,
        borderRadius: 14,
        overflow: "hidden",
        cursor: "pointer",
        transform: hover ? "translateY(-2px)" : "none",
        transition: "transform .15s",
      }}
    >
      {/* Image area */}
      <div style={{
        height: 110,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 44,
        background: T.bg,
        position: "relative",
      }}>
        <img
  src={p.img}
  alt={p.name}
  style={{
    width: "100%",
    height: 110,
    objectFit: "cover",
  }}
/>
      </div>

      {/* Body */}
      <div style={{ padding: 10 }}>
        <div style={{ color: "#F59E0B", fontSize: 11, marginBottom: 4 }}>
          {"★".repeat(p.id % 2 === 0 ? 4 : 5)}
          {"☆".repeat(p.id % 2 === 0 ? 1 : 0)}
        </div>
        <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 2 }}>{p.name}</div>
        <div style={{ fontSize: 11, color: T.muted, marginBottom: 6 }}>{p.wt}</div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <span style={{ fontSize: 15, fontWeight: 500, color: T.green }}>₹{p.price}</span>
            {p.old && (
              <span style={{ fontSize: 11, color: T.muted, textDecoration: "line-through", marginLeft: 3 }}>
                ₹{p.old}
              </span>
            )}
          </div>
          <button
            onClick={e => { e.stopPropagation(); onAdd(); }}
            style={{
              background: T.green,
              color: "#fff",
              border: "none",
              borderRadius: 8,
              width: 26,
              height: 26,
              fontSize: 18,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >+</button>
        </div>
      </div>
    </div>
  );
}
