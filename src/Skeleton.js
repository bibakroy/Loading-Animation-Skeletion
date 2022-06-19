import React from "react";

export default function Skeleton() {
  return (
    <div className="card skeleton">
      <div className="title text"></div>
      <div className="description text"></div>
      <div className="description text"></div>
      <div className="description text"></div>
      <div className="overlay"></div>
    </div>
  );
}
