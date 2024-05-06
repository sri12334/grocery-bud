import data from '../data.js';

const deleteBtnHandler = (id) => {
    const item = document.getElementById(id);
    if (item) {
        item.remove();
    }

    data.items = data.items.filter((item) => item.id !== id);
};

export default deleteBtnHandler;
