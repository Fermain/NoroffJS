import NoroffJS from '../../lib';
import rickStyles from './styles.css?inline';

export default class AppComponent extends NoroffJS.Component {
    static tagName = "rick-astley";
    static styles = rickStyles;

    videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

    protected onMount(): void {
        const iframe = document.createElement("iframe");
        iframe.src = this.videoUrl;
        document.querySelectorAll("noroff-app *").forEach((element) => {
            console.log(element);
            
            element.append(iframe.cloneNode(true))
        })
    }

    render() {
        super.render();
        this.shadowRoot.innerHTML += `
            <div id="rick"></div>
        `;
    }
}

AppComponent.register()