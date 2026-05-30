import React from "react";
import { useState } from "react";
import { PRODUCTS, NUTRITION } from "../data/products";
import { GreenButton } from "../components/FormElements";
import T from "../theme";

export default function DetailPage({ product, setPage, addToCart }) {
  const [qty, setQty] = useState(1);
  const p = product || PRODUCTS[5];

  return (
    <div style={{ padding: "16px 20px", background: T.bg, minHeight: "100vh" }}>

      {/* Back */}
      <button
        onClick={() => setPage("home")}
        style={{
          background: "none",
          border: "none",
          color: T.green,
          fontSize: 13,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 4,
          marginBottom: 16,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        ← Back to shop
      </button>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

        {/* Left column */}
        <div>
          {/* Big emoji image */}
          <div style={{
            background: "#fff",
            border: `1px solid ${T.border}`,
            borderRadius: 16,
            height: 220,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 80,
            marginBottom: 16,
          }}>
            <img
  src={p.img}
  alt={p.name}
  style={{
    width: 180,
    height: 180,
    objectFit: "contain",
    borderRadius: 16,
  }}
/>
          </div>

          {/* Nutrition table */}
          <div style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 12, padding: "12px 16px" }}>
            <h3 style={{ fontSize: 14, fontWeight: 500, marginBottom: 10 }}>Nutrition info (per 100g)</h3>
            {NUTRITION.map((n, i) => (
              <div
                key={n.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "4px 0",
                  borderBottom: i < NUTRITION.length - 1 ? `1px solid ${T.border}` : "none",
                  fontSize: 12,
                  color: T.muted,
                }}
              >
                <span>{n.label}</span>
                <strong style={{ color: T.text }}>{n.val}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div>
          <div style={{ color: "#F59E0B", fontSize: 14, marginBottom: 6 }}>★★★★★</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, marginBottom: 4 }}>{p.name}</h2>
          <div style={{ fontSize: 13, color: T.muted, marginBottom: 8 }}>{p.wt}</div>
          <div style={{ fontSize: 24, fontWeight: 500, color: T.green, marginBottom: 4 }}>₹{p.price}</div>
          {p.old && (
            <div style={{ fontSize: 13, color: T.muted, textDecoration: "line-through", marginBottom: 12 }}>
              was ₹{p.old}
            </div>
          )}

          {/* Tags */}
          <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
            {["🌿 Organic", "❄️ Chilled", "🇮🇳 Local farm"].map(tag => (
              <span
                key={tag}
                style={{
                  background: T.greenPale,
                  color: T.greenD,
                  fontSize: 11,
                  padding: "3px 10px",
                  borderRadius: 10,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <p style={{ fontSize: 13, color: T.muted, lineHeight: 1.6, marginBottom: 16 }}>
            Handpicked {p.name.toLowerCase()} from local farms. Bright, fresh flavour with a
            fragrant aroma. Best consumed within 3 days of delivery.
          </p>

          {/* Quantity + Add to cart */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#fff",
              border: `1px solid ${T.border}`,
              borderRadius: 10,
              padding: "4px 10px",
            }}>
              <button
                onClick={() => setQty(q => Math.max(1, q - 1))}
                style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer", color: T.green }}
              >−</button>
              <span style={{ fontSize: 15, fontWeight: 500, minWidth: 20, textAlign: "center" }}>{qty}</span>
              <button
                onClick={() => setQty(q => q + 1)}
                style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer", color: T.green }}
              >+</button>
            </div>
            <GreenButton onClick={() => { addToCart(p, qty); setPage("checkout"); }}>
              🛒 Add to cart
            </GreenButton>
          </div>

          {/* Buy now */}
          <button
            onClick={() => setPage("checkout")}
            style={{
              width: "100%",
              background: "transparent",
              border: `1.5px solid ${T.green}`,
              color: T.green,
              borderRadius: 12,
              padding: 10,
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: 14,
            }}
          >
            Buy now
          </button>

          {/* Delivery info */}
          <div style={{
            padding: "10px 12px",
            background: T.greenPale,
            borderRadius: 10,
            fontSize: 12,
            color: T.greenD,
            display: "flex",
            gap: 10,
          }}>
            <span>🚚 Free delivery above ₹499</span>
            <span>⏱ 30-min delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
}
