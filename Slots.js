import {  LitElement,html,css  } from 'lit-element'
import './TaskComponent';

class Slots extends LitElement {
    static get properties() {
        return {
            title: String,
            subTitle: String,
            description: String
        }
    }



    constructor() {
        super();
        this.title = 'First';
        this.subTitle = 'sub';
        this.description = 'hello';
    }

    render() {
        return html`
            <div class="card">
                <h2>${this.title}</h2>
                <h5>${this.subTitle}</h5>
                <div class="card-description">
                    <p>${this.description}</p>
                    <slot></slot>
                    <slot name="details"></slot>
                </div>
            </div>
        `;
    }
}

customElements.define('slot-element', Slots)
