import dom from '../dom.js';

const editBtnHandler = (item) => {
    dom.submitBtn.innerText = 'Edit';
    dom.todoInput.value = item.text;
    dom.todoInput.dataset.itemId = item.id; // Add a dataset attribute to store the item id
};

export default editBtnHandler;
