import editBtnHandler from '../handlers/editBtnHandler.js';
import deleteBtnHandler from '../handlers/deleteBtnHandler.js';

const createItem = (item) => {
    const container = document.createElement('div');
    container.classList.add('todo-item');
    container.id = item.id;

    const title = document.createElement('p');
    title.classList.add('title');
    title.innerText = item.text;

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    const editBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    editBtn.classList.add('edit-btn');

    editBtn.addEventListener('click', () => {
        container.classList.add('selected');
        editBtnHandler(item.id);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', () => {
        // eslint-disable-next-line no-restricted-globals
        const done = confirm('Are you sure? want to delete item');
        if (done) {
            deleteBtnHandler(item.id);
            alert('Item deleted successfully')
        }
        return;
    });

    btnContainer.append(editBtn, deleteBtn);
    container.append(title, btnContainer);

    return container;
};

export default createItem;
