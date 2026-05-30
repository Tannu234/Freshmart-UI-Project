import React from "react";
import T from "../theme";

const NAV_TABS = [
  { id: "home",     icon: "🏠", label: "Home"     },
  { id: "detail",   icon: "🛍",  label: "Product"  },
  { id: "checkout", icon: "💳", label: "Checkout" },
  { id: "auth",     icon: "👤", label: "Account"  },
];

export default function Navbar({ page, setPage, cartCount }) {
  return (
    <nav style={{
      background: "#fff",
      borderBottom: `1px solid ${T.border}`,
      padding: "0 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 58,
      position: "sticky",
      top: 0,
      zIndex: 10,
    }}>
      {/* Logo */}
      <div
        onClick={() => setPage("home")}
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 20,
          color: T.green,
          cursor: "pointer",
        }}
      >
        Fresh<span style={{ color: T.amber }}>Mart</span>
      </div>

      {/* Page tabs */}
      <div style={{ display: "flex", gap: 6 }}>
        {NAV_TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setPage(t.id)}
            style={{
              background: page === t.id ? T.green : "none",
              color: page === t.id ? "#fff" : T.muted,
              border: "none",
              borderRadius: 20,
              padding: "7px 13px",
              fontSize: 13,
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* Cart icon */}
      <button
        onClick={() => setPage("checkout")}
        aria-label="Cart"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          position: "relative",
          fontSize: 22,
        }}
      >
        🛒
        <span style={{
          position: "absolute",
          top: -6,
          right: -6,
          background: T.amber,
          color: "#fff",
          fontSize: 10,
          borderRadius: "50%",
          width: 18,
          height: 18,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          {cartCount}
        </span>
      </button>
    </nav>
  );
}
