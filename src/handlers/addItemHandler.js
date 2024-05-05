import dom from '../dom.js';
import data from '../data.js';
import createItem from '../components/createItem.js';

const addItemHandler = (e) => {
    e.preventDefault();
    const value = dom.todoInput.value.trim();
    console.log(value);
    const btnType = dom.submitBtn.innerText;
    if (btnType === 'submit') {
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
    } else {
        const selectedItem = document.querySelector('.selected');
        console.log(selectedItem);
        selectedItem.querySelector('.title').innerText = value;
        const id = Number(selectedItem.id);
        const itemData = data.items.find((item) => item.id === id);
        itemData.text = value;
        dom.todoInput.value = '';
        dom.submitBtn.innerText = 'submit';
        selectedItem.classList.remove('selected');
    }
};

export default addItemHandler;
