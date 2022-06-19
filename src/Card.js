import React from "react";

export default function Card({ title, body }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
