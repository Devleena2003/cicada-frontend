import React, { useEffect, useRef } from "react";
import "./index.css";
function RaindropMatrix({children}) {
  const canvas = useRef();

  useEffect(() => {
    console.log("useEffect");
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;
    if (canvas.current) {
      const ctx = canvas.current.getContext("2d");

      //frame control
      let lastTime = 0;
      const fps = 50;
      const interval = 1000 / fps;
      let delta = 0;

      const rain = new Rain(canvas.current.width, canvas.current.height);
      function animate(timeStamp) {
        const dTime = timeStamp - lastTime;
        lastTime = timeStamp;
        if (delta > interval) {
          ctx.fillStyle = "rgba(0,0,0,0.035)";
          ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);
          ctx.font = `${rain.fontSize}px monospace`;
          ctx.textAlign = "center";
          rain.raindrops.forEach((raindrop) => {
            raindrop.draw(ctx);
          });
          delta = 0;
        } else {
          delta += dTime;
        }
        requestAnimationFrame(animate);
      }
      animate(0);

      window.addEventListener("resize", () => {
        if (canvas.current != null) {
          canvas.current.width = window.innerWidth;
          canvas.current.height = window.innerHeight;
          rain.resize();
          animate(0);
        }
      });
    }
  }, []);

  class Raindrop {
    constructor(x, y, fontSize, canvasHeight) {
      this.japaneseSymbols =
        "abcdefghijklmnopqrstuvwxyzあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
      this.x = x;
      this.y = y;
      this.fontSize = fontSize;
      this.canvasHeight = canvasHeight;
      this.character = "";
    }
    draw(context) {
      (this.character =
        this.japaneseSymbols[
          Math.floor(Math.random() * this.japaneseSymbols.length)
        ]),
        (context.fillStyle = "#37a32f");
      context.fillText(
        this.character,
        this.x * this.fontSize,
        this.y * this.fontSize
      );
      if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.99) {
        this.y = 0;
      } else {
        this.y += 1;
      }
    }
  }

  class Rain {
    constructor(canvasWidth, canvasHeight) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.fontSize = 7;
      this.columns = this.canvasWidth / this.fontSize;
      this.raindrops = [];
      // when we are initializing the class, we need to call the #initialize method
      this.#initialize();
    }

    #initialize() {
      for (let i = 0; i < this.columns; i++) {
        this.raindrops[i] = new Raindrop(
          i,
          0,
          this.fontSize,
          this.canvasHeight
        );
      }
    }
    resize() {
      this.canvasWidth = window.innerWidth;
      this.canvasHeight = window.innerHeight;
      this.columns = this.canvasWidth / this.fontSize;
      this.raindrops = [];
      this.#initialize();
    }
  }

  return (
    <div>
      <canvas ref={canvas}></canvas>
      <div className="canvas-children-container">
        {children}
      </div>
    </div>
  );
}

export default RaindropMatrix;
