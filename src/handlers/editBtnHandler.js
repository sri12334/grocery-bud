import data from '../data.js';
import dom from '../dom.js';

const editBtnHandler = (id) => {
    const itemId = Number(id);
    dom.submitBtn.innerText = 'edit';
    const item = data.items.find((item) => item.id === itemId);
    dom.todoInput.value = item.text;
};

export default editBtnHandler;
