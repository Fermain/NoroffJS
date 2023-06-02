import NoroffJS from '../../lib';
import alertStyles from './styles.css?inline';

export default class AlertComponent extends NoroffJS.Component {
    static tagName = "noroff-alert";
    static styles = alertStyles;

    static get observedAttributes() {
        return ['message'];
    }

    protected onMount() {
        this.shadowRoot.querySelector("button")?.addEventListener("click", () => {
            alert(this.getAttribute("message"));
        });
    }

    render() {
        super.render();
        this.shadowRoot.innerHTML += `
            <button><slot/></button>
        `;
    }
}

AlertComponent.register()