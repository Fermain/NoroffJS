import NoroffJS from '../../lib';
import appStyles from './styles.css?inline';

export default class AppComponent extends NoroffJS.Component {
    static tagName = "noroff-app";
    static styles = appStyles;

    render() {
        super.render();
        this.shadowRoot.innerHTML += `
            <div id="app"><slot/></div>
        `;
    }
}

AppComponent.register()