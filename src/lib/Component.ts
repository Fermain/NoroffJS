export class Component extends HTMLElement {
    shadowRoot: ShadowRoot;
    static tagName = "noroff-component";
    static styles = "";

    constructor() {
        super();
        this.shadowRoot = this.attachShadow({ mode: 'open' });
    }

    static register() {
        customElements.define(this.tagName, this);
    }

    connectedCallback() {
        this.render();
        setTimeout(() => {
            this.onMount();
        }, 0);
    }

    disconnectedCallback() {
        this.onDestroy();
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (oldValue !== newValue) {
            this.setAttribute(name, newValue);
            this.onUpdate(name, oldValue, newValue);
            this.render();
        }
    }

    protected render() {
        this.shadowRoot.innerHTML = `<style>${(this.constructor as typeof Component).styles}</style>`;
    }

    protected onMount() { }
    protected onDestroy() { }
    protected onUpdate(name: string, oldValue: string, newValue: string) {
        console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
    }
}