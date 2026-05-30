import React from "react";
import { useState } from "react";
import { FormSection, FormField, TotalRow } from "../components/FormElements";
import T from "../theme";

const PAY_OPTIONS = [
  { label: "UPI / GPay / PhonePe",  sub: "Instant payment via UPI"   },
  { label: "Credit / Debit card",   sub: "Visa, Mastercard, RuPay"   },
  { label: "Cash on delivery",      sub: "Pay when order arrives"     },
];

export default function CheckoutPage({ setPage, cart }) {
  const [payMethod, setPayMethod] = useState(0);

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const discount = Math.round(subtotal * 0.2);
  const total    = subtotal - discount;

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 300px",
      gap: 20,
      padding: 20,
      background: T.bg,
      minHeight: "100vh",
    }}>

      {/* ── Left: Forms ── */}
      <div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, marginBottom: 16 }}>Checkout</h2>

        {/* Address */}
        <FormSection title="📍 Delivery address">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
            <FormField label="First name" placeholder="Riya"   />
            <FormField label="Last name"  placeholder="Sharma" />
          </div>
          <FormField label="Phone number" placeholder="+91 98765 43210" style={{ marginBottom: 10 }} />
          <FormField label="Address"      placeholder="123 MG Road, Indore" style={{ marginBottom: 10 }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <FormField label="City"    placeholder="Indore"  />
            <FormField label="Pincode" placeholder="452001"  />
          </div>
        </FormSection>

        {/* Payment */}
        <FormSection title="💳 Payment method">
          {PAY_OPTIONS.map((o, i) => (
            <div
              key={i}
              onClick={() => setPayMethod(i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                border: `1px solid ${payMethod === i ? T.green : T.border}`,
                background: payMethod === i ? T.greenPale : "#fff",
                borderRadius: 10,
                cursor: "pointer",
                marginBottom: 8,
              }}
            >
              <input type="radio" readOnly checked={payMethod === i} style={{ accentColor: T.green }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{o.label}</div>
                <div style={{ fontSize: 11, color: T.muted }}>{o.sub}</div>
              </div>
            </div>
          ))}
        </FormSection>

        {/* Promo */}
        <FormSection title="🏷 Promo code">
          <div style={{ display: "flex", gap: 8 }}>
            <input
              type="text"
              placeholder="Enter code e.g. FRESH20"
              style={{
                flex: 1,
                border: `1px solid ${T.border}`,
                borderRadius: 8,
                padding: "8px 10px",
                fontSize: 13,
                fontFamily: "'DM Sans', sans-serif",
                outline: "none",
                color: T.text,
              }}
            />
            <button style={{
              background: "transparent",
              border: `1.5px solid ${T.amber}`,
              color: T.amber,
              fontSize: 12,
              fontWeight: 500,
              padding: "6px 14px",
              borderRadius: 16,
              cursor: "pointer",
            }}>Apply</button>
          </div>
        </FormSection>
      </div>

      {/* ── Right: Order Summary ── */}
      <div>
        <div style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 14, padding: 16 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, marginBottom: 16 }}>Order summary</h2>

          {cart.length === 0 ? (
            <p style={{ fontSize: 13, color: T.muted, textAlign: "center", padding: "20px 0" }}>
              Your cart is empty.
            </p>
          ) : (
            cart.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: `1px solid ${T.border}` }}>
                <div style={{ fontSize: 28, background: T.bg, borderRadius: 8, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
  src={item.img}
  alt={item.name}
  style={{
    width: 40,
    height: 40,
    objectFit: "cover",
    borderRadius: 8,
  }}
/>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{item.name}</div>
                  <div style={{ fontSize: 11, color: T.muted }}>{item.wt} × {item.qty}</div>
                </div>
                <div style={{ marginLeft: "auto", fontSize: 13, fontWeight: 500, color: T.green }}>
                  ₹{item.price * item.qty}
                </div>
              </div>
            ))
          )}

          <hr style={{ border: "none", borderTop: `1px solid ${T.border}`, margin: "10px 0" }} />
          <TotalRow label="Subtotal" val={`₹${subtotal}`} />
          <TotalRow label="Delivery" val={<span style={{ color: T.greenL }}>Free</span>} />
          <TotalRow label="Discount (FRESH20)" val={<span style={{ color: T.red }}>−₹{discount}</span>} />
          <hr style={{ border: "none", borderTop: `1px solid ${T.border}`, margin: "8px 0" }} />
          <TotalRow
            label={<strong>Total</strong>}
            val={<strong style={{ color: T.green, fontSize: 17 }}>₹{total}</strong>}
          />

          <button
            onClick={() => setPage("success")}
            style={{
              width: "100%",
              background: T.green,
              color: "#fff",
              border: "none",
              borderRadius: 12,
              padding: 13,
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              marginTop: 12,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Place order →
          </button>

          <p style={{ textAlign: "center", fontSize: 11, color: T.muted, marginTop: 10 }}>
            🔒 Secured with 256-bit SSL encryption
          </p>
        </div>
      </div>
    </div>
  );
}
