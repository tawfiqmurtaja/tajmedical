import React from "react";
const products = [
  {
    id: 1,
    name: "Sterile Syringe",
    description: "Single-use, 5ml sterile syringe.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Medical Gloves",
    description: "Nitrile gloves, powder-free.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Face Mask",
    description: "3-ply disposable face mask.",
    image: "https://via.placeholder.com/150",
  },
];

export default function HomePage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
        <h1>MedBrand</h1>
        <nav>
          <a href="#products" style={{ marginRight: "1rem" }}>Products</a>
          <a href="#how" style={{ marginRight: "1rem" }}>How It Works</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2>Find & Customize Medical Consumables</h2>
        <p>Private label your products with our easy design tools</p>
        <button style={{ margin: "1rem" }}>Get Started</button>
        <button>Browse Products</button>
      </section>

      <section id="how" style={{ display: "flex", justifyContent: "space-around", marginBottom: "3rem" }}>
        <div>
          <h3>1. Choose Products</h3>
          <p>Select from a wide range of medical consumables</p>
        </div>
        <div>
          <h3>2. Customize Packaging</h3>
          <p>Add your logo, change text, colors & more</p>
        </div>
        <div>
          <h3>3. Place Your Order</h3>
          <p>We’ll take care of the rest, from production to delivery</p>
        </div>
      </section>

      <section id="products">
        <h2>Featured Products</h2>
        <div style={{ display: "flex", gap: "1rem", marginBottom: "3rem" }}>
          {products.map((product) => (
            <div key={product.id} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
              <img src={product.image} alt={product.name} style={{ width: "100%" }} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button>Customize Packaging</button>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <form style={{ display: "grid", gap: "1rem", maxWidth: "400px" }}>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <textarea placeholder="Message" />
          <button>Send Message</button>
        </form>
      </section>
    </div>
  );
}
