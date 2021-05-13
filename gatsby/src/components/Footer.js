import React from "react";

export default function Footer() {
  return (
    <footer>
      <p className="center">
        &copy; The Wonderful World of Dogs {new Date().getFullYear()}
      </p>
    </footer>
  );
}
