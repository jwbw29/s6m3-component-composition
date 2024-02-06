import React from "react";
{
  /* <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
<link
  href="https://fonts.googleapis.com/css2?family=Lato&family=Roboto:ital,wght@0,400;1,300&display=swap"
  rel="stylesheet"
/> */
}
{
  /* <link rel="icon" href="favicon.ico" /> */
}

export const metadata = {
  title: "APOD",
  description: "Astronomy Picture of the Day",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
