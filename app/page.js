"use client";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import QRGenerator from "./components/QRGenerator/QRGenerator";
import "./page.scss";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <QRGenerator />
      <Footer />
    </main>
  );
}
