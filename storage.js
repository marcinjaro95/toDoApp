class Storage {

    prepareItemsToSave() {
        let array = [];
        let items = document.querySelectorAll('.item');
        for (let i = 0; i < items.length; i++) {
            if(!items[i].hasAttribute('style')) {
                array.push(items[i].textContent.split(/.$/)[0].split(','));
            }
        }
        return array.join(',');
    }

    setItemInLocalStorage() {
        localStorage.setItem('list', JSON.stringify(this.prepareItemsToSave()));
    };

    prepareItemsToShow(item) {
        let li = document.createElement('li');
        let textNode = document.createTextNode(item);
        let span = document.createElement('SPAN');
        let text = document.createTextNode('\u00D7');

        li.classList.add('item');
        li.appendChild(textNode);
        document.querySelector('.list').appendChild(li);
        span.className = 'close';
        span.appendChild(text);
        li.appendChild(span);

        let close = document.querySelectorAll('.close');

        close.forEach(elem => elem.onclick = function () {
            let div = this.parentElement;
            div.style.display = 'none';
        });
    }

    getItemFromLocalStorage() {
        if (localStorage.getItem('list')) {
            let items = localStorage.getItem('list').replace(/^.|.$/g, '').split(',');
            for (let i = 0; i < items.length; i++) {
                this.prepareItemsToShow(items[i]);
            }
        }
    }

}
let storage = new Storage();
storage.getItemFromLocalStorage();
