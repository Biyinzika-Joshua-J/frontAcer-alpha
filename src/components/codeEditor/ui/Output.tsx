import React from "react";

const Output = ({ html, css, javascript }) => {
  const srcDoc = `
    <html>
        <head>
            <style>
                ${css}
            </style>
        </head>
        <body>
            ${html}
        </body>
        <script>
            ${javascript}
        </script>
    </html>
  `;
  return (
    <div>
      <iframe
        srcDoc={srcDoc}
        frameborder="0"
        height={"100%"}
        width={"100%"}
        title="output"
        sandbox="allow-scripts"
      />
    </div>
  );
};

export default Output;
