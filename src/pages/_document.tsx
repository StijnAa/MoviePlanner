import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <React.StrictMode>
      <Html lang="en">
        <Head />
        <body>
          <div className="overflow-hidden">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    </React.StrictMode>
  );
}
