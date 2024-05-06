import dom from '../dom.js';
import data from '../data.js';
import createItem from '../components/createItem.js';

const handleSubmit = (value) => {
    if (!value) {
        dom.error.innerText = 'please entre a value';
        dom.error.classList.add('error1');
        setTimeout(() => {
            dom.error.innerText = '';
            dom.error.classList.remove('error1');
        }, 2000);
    } else {
        const newItem = {
            id: data.id++,
            text: value,
        };

        const itemDom = createItem(newItem);
        dom.todos.prepend(itemDom);
        data.items.push(newItem);
        dom.todoInput.value = '';
    }
};

const handelEdit = (value) => {
    const selectedItem = document.querySelector('.selected');
    selectedItem.querySelector('.title').innerText = value;
    const id = Number(selectedItem.id);
    const itemData = data.items.find((item) => item.id === id);
    itemData.text = value;
    dom.todoInput.value = '';
    dom.submitBtn.innerText = 'submit';
    selectedItem.classList.remove('.selected');
};

const addItemHandler = (inputValue) => {
    const value = inputValue.trim();
    if (dom.submitBtn.innerText === 'Edit') {
        handelEdit(value);
    } else {
        handleSubmit(value);
    }
};

export default addItemHandler;
