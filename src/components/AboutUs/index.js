import React from "react";

var __html = require("./index.html.js");
var template = { __html: __html };

export default function AboutUs() {
  return (
    <section id='about' style={{ marginTop: 30 }}>
      <div>
        <span dangerouslySetInnerHTML={template} />
      </div>
    </section>
  );
}
