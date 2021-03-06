import {  LitElement,html,css  } from 'lit-element'


class TaskComponent extends LitElement {
    static get properties() {
        return {
            title: String,
        }
    }



    constructor() {
        super();
        this.title = 'First';
    }

    render() {
        return html`
            <h1>${this.title}</h1>
        `;
    }
}

customElements.define('task-component', TaskComponent)
