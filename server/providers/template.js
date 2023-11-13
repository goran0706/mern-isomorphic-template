const template = markUp => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      >
      <title>Isomorphic React App</title>
    </head>
    <body>
      <div id="root">${markUp}</div>
      <script type="text/javascript" src="client.bundle.js"></script>
    </body>
  </html>
`;

export default template;
