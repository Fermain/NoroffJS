import NoroffJS from '../../../lib';
import burgerStyles from './styles.css?inline';

export default class BurgerComponent extends NoroffJS.Component {
    static tagName = "noroff-burger";
    static styles = burgerStyles;

    protected onMount(): void {
        const button = this.shadowRoot.querySelector("button");

        button?.addEventListener("click", function () {
            button.classList.toggle("active")
        })
    }

    render() {
        super.render();
        this.shadowRoot.innerHTML += `
            <button>Burger</button>
            <div class="items">
                <slot/>
            </div>
        `;
    }
}

BurgerComponent.register()