import React from "react";

export default function Loading() {
  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
