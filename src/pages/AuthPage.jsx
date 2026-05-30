import React from "react";
import { useState } from "react";
import { FormField } from "../components/FormElements";
import T from "../theme";

export default function AuthPage({ setPage }) {
  const [tab, setTab] = useState("login");

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 20px",
      background: T.bg,
      minHeight: "100vh",
    }}>
      <div style={{
        background: "#fff",
        border: `1px solid ${T.border}`,
        borderRadius: 20,
        padding: 32,
        width: "100%",
        maxWidth: 400,
      }}>
        {/* Logo */}
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: T.green, marginBottom: 6 }}>
          Fresh<span style={{ color: T.amber }}>Mart</span>
        </div>
        <p style={{ fontSize: 13, color: T.muted, marginBottom: 24 }}>Your daily fresh grocery store</p>

        {/* Tabs */}
        <div style={{ display: "flex", background: T.bg, borderRadius: 10, padding: 3, marginBottom: 22 }}>
          {["login", "signup"].map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                flex: 1,
                textAlign: "center",
                padding: 7,
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                border: tab === t ? `1px solid ${T.border}` : "none",
                background: tab === t ? "#fff" : "none",
                color: tab === t ? T.green : T.muted,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {t === "login" ? "Sign in" : "Create account"}
            </button>
          ))}
        </div>

        {/* Login form */}
        {tab === "login" && (
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <FormField label="Email address" placeholder="you@example.com" type="email" />
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 12, color: T.muted }}>Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  style={{
                    border: `1px solid ${T.border}`,
                    borderRadius: 8,
                    padding: "8px 10px",
                    fontSize: 13,
                    fontFamily: "'DM Sans', sans-serif",
                    outline: "none",
                  }}
                />
              </div>
              <div style={{ fontSize: 12, color: T.green, cursor: "pointer", textAlign: "right" }}>
                Forgot password?
              </div>
              <AuthButton onClick={() => setPage("home")}>Sign in to FreshMart</AuthButton>
            </div>
            <DividerText />
            <SocialButton />
          </div>
        )}

        {/* Signup form */}
        {tab === "signup" && (
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <FormField label="First name" placeholder="Riya"   />
                <FormField label="Last name"  placeholder="Sharma" />
              </div>
              <FormField label="Email address"  placeholder="you@example.com"   type="email" />
              <FormField label="Phone number"   placeholder="+91 98765 43210"   type="tel"   />
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <label style={{ fontSize: 12, color: T.muted }}>Password</label>
                <input
                  type="password"
                  placeholder="Min. 8 characters"
                  style={{
                    border: `1px solid ${T.border}`,
                    borderRadius: 8,
                    padding: "8px 10px",
                    fontSize: 13,
                    fontFamily: "'DM Sans', sans-serif",
                    outline: "none",
                  }}
                />
              </div>
              <AuthButton onClick={() => setPage("home")}>Create my account</AuthButton>
            </div>
            <DividerText />
            <SocialButton />
          </div>
        )}

        <p style={{ textAlign: "center", fontSize: 12, color: T.muted, marginTop: 16 }}>
          By continuing, you agree to our{" "}
          <span style={{ color: T.green, cursor: "pointer" }}>Terms</span> and{" "}
          <span style={{ color: T.green, cursor: "pointer" }}>Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}

function AuthButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: T.green,
        color: "#fff",
        border: "none",
        borderRadius: 12,
        padding: 12,
        fontSize: 14,
        fontWeight: 500,
        cursor: "pointer",
        fontFamily: "'DM Sans', sans-serif",
        width: "100%",
      }}
    >
      {children}
    </button>
  );
}

function DividerText() {
  return (
    <div style={{ textAlign: "center", fontSize: 12, color: T.muted, margin: "16px 0", position: "relative" }}>
      <span style={{ background: "#fff", padding: "0 10px", position: "relative", zIndex: 1 }}>
        or continue with
      </span>
      <hr style={{
        position: "absolute", top: "50%", left: 0, right: 0,
        border: "none", borderTop: `1px solid ${T.border}`, margin: 0,
      }} />
    </div>
  );
}

function SocialButton() {
  return (
    <button style={{
      width: "100%",
      background: "#fff",
      border: `1px solid ${T.border}`,
      borderRadius: 10,
      padding: 10,
      fontSize: 13,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      fontFamily: "'DM Sans', sans-serif",
      color: T.text,
    }}>
      <span style={{ fontWeight: 700, color: "#4285F4" }}>G</span> Continue with Google
    </button>
  );
}
