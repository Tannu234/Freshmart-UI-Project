import React from "react";
import T from "../theme";

export function FormSection({ title, children }) {
  return (
    <div style={{
      background: "#fff",
      border: `1px solid ${T.border}`,
      borderRadius: 14,
      padding: 16,
      marginBottom: 14,
    }}>
      <h3 style={{ fontSize: 14, fontWeight: 500, marginBottom: 12, color: T.green }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

export function FormField({ label, placeholder, type = "text", style = {} }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, ...style }}>
      <label style={{ fontSize: 12, color: T.muted }}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          border: `1px solid ${T.border}`,
          borderRadius: 8,
          padding: "8px 10px",
          fontSize: 13,
          fontFamily: "'DM Sans', sans-serif",
          outline: "none",
          color: T.text,
          background: "#fff",
        }}
      />
    </div>
  );
}

export function TotalRow({ label, val }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}>
      <span>{label}</span>
      <span>{val}</span>
    </div>
  );
}

export function GreenButton({ children, onClick, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: T.green,
        color: "#fff",
        border: "none",
        borderRadius: 12,
        padding: "10px 22px",
        fontSize: 14,
        fontWeight: 500,
        cursor: "pointer",
        fontFamily: "'DM Sans', sans-serif",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
