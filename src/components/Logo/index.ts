import NoroffJS from '../../lib';
import logoStyles from './styles.css?inline';

export default class LogoComponent extends NoroffJS.Component {
    static tagName = "noroff-logo";
    static styles = logoStyles;

    render() {
        super.render();
        this.shadowRoot.innerHTML += `
            <a href="/"><img src="${this.getAttribute("src")}" /></a>
        `;
    }
}

LogoComponent.register()