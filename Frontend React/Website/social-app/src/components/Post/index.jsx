import React from "react";

export default function Post({ src = "...", text }) {
  return (
    <div className="post d-flex flex-column col-12 my-3">
      <p>{text}</p>
      {src && <img src={src} className="placeholder" alt="placeholder" />}
    </div>
  );
}
