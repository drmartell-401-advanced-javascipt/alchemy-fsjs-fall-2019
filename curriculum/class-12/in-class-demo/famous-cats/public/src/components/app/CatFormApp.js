import Component from '../Component.js';
import Header from './Header.js';

class CatFormApp extends Component {

    onRender(dom) {
        const header = new Header({ title: 'Add a Cat' });
        dom.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                <main>
                    <p>Cat Form Page</p>
                </main>
            </div>
        `;
    }
}

export default CatFormApp;