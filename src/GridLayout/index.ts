import buildStyles from "../../libs/misc/src/customElements/buildStyles";
import   addStyles from "../../libs/misc/src/customElements/addStyles";

const css = require("!!raw-loader!./index.css").default;

const styles = await buildStyles(css);

export default class GridLayout extends HTMLElement {

    private shadow = this.attachShadow({mode: "open"});

    constructor(...args: []|[number,number]) {
        super();

        addStyles(this.shadow, styles);
        this.shadow.append( document.createElement("slot") );

        if( args.length !== 0)
            this.setSize(...args);

        this.requestUpdate();
    }

    #size: [number, number] = [-1, -1];
    setSize(w: number, h: number) {
        this.#size[0] = w;
        this.#size[1] = h;

        this.style.setProperty("--nb-cols", `${w}`);
        this.style.setProperty("--nb-rows", `${h}`);

        this.requestUpdate();
    }
    getSize(): Readonly<[number, number]> {
        return this.#size;
    }

    //TODO...
    requestUpdate() {

    }
}

customElements.define("layout-grid", GridLayout);