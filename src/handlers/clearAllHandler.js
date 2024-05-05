import dom from '../dom.js';
import data from '../data.js';

const clearAllHandler = () => {
    dom.todos.innerHTML = '';
    data.items = [];

    if (data.items.length === 0) {
        dom.clearBtn.style.display = 'none';
    }
};

export default clearAllHandler;
