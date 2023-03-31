const express = require("express");

const app = express();

app.get("/redirect", (req, res) => {
  res.redirect("/redirected-1");
});

app.get("/redirected-1", (req, res) => {
  res.redirect("/redirected-2");
});

app.get("/redirected-2", (req, res) => {
  res.redirect("/final-page");
});

app.get("/final-page", (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Final Page with OGP</title>
        <meta property="og:title" content="Final Page Title" />
        <meta property="og:description" content="This is the final page with OGP information after 2 redirects." />
        <meta property="og:image" content="https://react.dev/images/og-home.png" />
    </head>
    <body>
        <h1>Final Page with OGP</h1>
        <p>This is the final page with OGP information after 2 redirects.</p>
    </body>
    </html>
  `);
});

app.get("/image/redirect", (req, res) => {
  res.redirect("/image/redirected-1");
});

app.get("/image/redirected-1", (req, res) => {
  res.redirect("/image/redirected-2");
});

app.get("/image/redirected-2", (req, res) => {
  res.redirect("https://image.lgtmoon.dev/203355");
});

app.listen(3003, () => {
  console.log("Server started on port 3003");
});
