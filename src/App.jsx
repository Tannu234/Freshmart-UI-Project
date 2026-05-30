import React from "react";
import { useState } from "react";
import { PRODUCTS } from "./data/products";
import Navbar       from "./components/Navbar";
import HomePage     from "./pages/HomePage";
import DetailPage   from "./pages/DetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import AuthPage     from "./pages/AuthPage";
import SuccessPage  from "./pages/SuccessPage";

// Default cart (3 sample items pre-loaded)
const DEFAULT_CART = [
  { ...PRODUCTS[5], qty: 2 },
  { ...PRODUCTS[0], qty: 1 },
  { ...PRODUCTS[6], qty: 1 },
];

export default function App() {
  const [page,          setPage]          = useState("home");
  const [detailProduct, setDetailProduct] = useState(PRODUCTS[5]);
  const [cart,          setCart]          = useState(DEFAULT_CART);

  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, { ...product, qty }];
    });
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar page={page} setPage={setPage} cartCount={cartCount} />

      {page === "home"     && <HomePage     setPage={setPage} setDetailProduct={setDetailProduct} addToCart={addToCart} />}
      {page === "detail"   && <DetailPage   product={detailProduct} setPage={setPage} addToCart={addToCart} />}
      {page === "checkout" && <CheckoutPage setPage={setPage} cart={cart} />}
      {page === "auth"     && <AuthPage     setPage={setPage} />}
      {page === "success"  && <SuccessPage  setPage={setPage} />}
    </div>
  );
}
