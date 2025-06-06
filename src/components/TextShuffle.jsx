import React, { useEffect, useState } from "react";

const shuffleText = (newText) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_=[]";
  const maxLength = newText.length;
  const queue = [];

  for (let i = 0; i < maxLength; i++) {
    const to = newText[i] || "";
    const start = Math.floor(Math.random() * 20);
    const end = start + Math.floor(Math.random() * 20);
    queue.push({ to, start, end });
  }

  return (update) => {
    let frame = 0;

    const interval = setInterval(() => {
      let output = "";
      let complete = 0;

      for (let i = 0; i < queue.length; i++) {
        const { to, start, end } = queue[i];

        if (frame >= end) {
          output += to;
          complete++;
        } else if (frame >= start) {
          output += chars[Math.floor(Math.random() * chars.length)];
        } else {
          output += " ";
        }
      }

      update(output);

      frame++;
      if (complete === queue.length) clearInterval(interval);
    }, 15);
  };
};

export default function TextShuffle({ text }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const animate = shuffleText(text);
    animate(setDisplay);
  }, [text]);

  return (
    <h1
      style={{
        fontFamily: "TrajanPro",
        textAlign: "center",
        minHeight: "87.4px",
      }}
      className="textSelected"
    >
      {display}
    </h1>
  );
}
