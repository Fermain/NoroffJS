import NoroffJS from '../../../lib';
import burgerItemStyles from './styles.css?inline';

export default class BurgerItemComponent extends NoroffJS.Component {
    static tagName = "noroff-burger-item";
    static styles = burgerItemStyles;

    render() {
        super.render();
        this.shadowRoot.innerHTML += `
            <a href="${this.getAttribute("href")}"><slot/></a>
        `;
    }
}

BurgerItemComponent.register()