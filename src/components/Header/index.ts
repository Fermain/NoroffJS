import NoroffJS from '../../lib';
import headerStyles from './styles.css?inline';

export default class AppComponent extends NoroffJS.Component {
    static tagName = "noroff-header";
    static styles = headerStyles;

    render() {
        super.render();
        this.shadowRoot.innerHTML += `
            <header><slot/></header>
        `;
    }
}

AppComponent.register()