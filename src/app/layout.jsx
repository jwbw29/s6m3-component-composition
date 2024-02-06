import React from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="favicon.ico" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Roboto:ital,wght@0,400;1,300&display=swap"
          rel="stylesheet"
        />
        {/* <title>APOD</title> */}
      </head>

      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
