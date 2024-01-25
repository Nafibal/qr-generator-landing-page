import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode.react";

import "./QRGenerator.scss";
import Container from "../container/Container";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGeneratorAnimation from "@/app/hooks/useGeneratorAnimation";

gsap.registerPlugin(ScrollTrigger);

const QRGenerator = () => {
  const [text, setText] = useState("");
  const [size, setSize] = useState(190);
  const [foreground, setForeground] = useState("#000000");
  const [background, setBackground] = useState("#ffffff");
  const canvasRef = useRef(null);

  const generatorRef = useRef();
  const generatorTitleRef = useRef();
  const generatorSubtitleRef = useRef();
  const qrRef = useRef();

  // Animation
  useGeneratorAnimation(
    generatorRef,
    generatorTitleRef,
    generatorSubtitleRef,
    qrRef
  );

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current.children[0];
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "qr_code.png";
    link.href = url;
    link.click();
  };

  return (
    <section className="generator" id="app" ref={generatorRef}>
      <Container>
        <div className="generator_title_container">
          <h2 className="generator_title" ref={generatorTitleRef}>
            Try For Yourself
          </h2>
          <h4 className="generator_subtitle" ref={generatorSubtitleRef}>
            Use it and feel the magic!
          </h4>
        </div>
        <div className="QR_container" ref={qrRef}>
          <div className="qr_input">
            <div className="input_container">
              <label htmlFor="">Text:</label>
              <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Enter text for QR code"
              />
            </div>
            <div className="input_container">
              <label htmlFor="size">Size:</label>
              <input
                type="number"
                id="size"
                value={size}
                onChange={(e) => setSize(parseInt(e.target.value))}
              />
            </div>
            <div className="input_container">
              <label htmlFor="foreground">Foreground Color:</label>
              <input
                type="color"
                id="foreground"
                value={foreground}
                onChange={(e) => setForeground(e.target.value)}
              />
            </div>
            <div className="input_container">
              <label htmlFor="background">Background Color:</label>
              <input
                type="color"
                id="background"
                value={background}
                onChange={(e) => setBackground(e.target.value)}
              />
            </div>
          </div>
          <div className="qr_code">
            {text && (
              <div ref={canvasRef}>
                <QRCode
                  value={text}
                  size={size}
                  fgColor={foreground}
                  bgColor={background}
                />
              </div>
            )}
            <br />
            {text && (
              <button className="download_button" onClick={handleDownload}>
                Download QR Code
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default QRGenerator;
