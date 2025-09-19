import GridLayout from "../GridLayout";

const layout = new GridLayout(3, 3);

const a = document.createElement("div");
a.textContent = "ok";

layout.append(a);
layout.append(a.cloneNode(true) );

document.body.append(layout);