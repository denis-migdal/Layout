import GridLayout from "../GridLayout";

const layout = new GridLayout(3, 3);

const a = document.createElement("div");
a.textContent = "ok";

const elem = new Array<Node>(4);
for(let i = 0; i < elem.length; ++i)
    elem[i] = a.cloneNode(true);

layout.replaceChildren(elem[0], elem[1], elem[2],
                       elem[3]);

document.body.append(layout);