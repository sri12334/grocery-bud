import dom from '../dom.js';
import addItemHandler from '../handlers/addItemHandler.js';

const addItemEvent = () => {
    dom.submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addItemHandler(dom.todoInput.value);
    });
};

export default addItemEvent;
