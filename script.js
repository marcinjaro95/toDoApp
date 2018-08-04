class ToDoApp {
    constructor() {
        this.myNodeList = document.querySelectorAll('.item');
        this.close = document.querySelectorAll('.close');
        this.unorderedList = document.querySelector('.list');
    };

    addNewItem() {
        let li = document.createElement('li');
        let inputValue = document.querySelector('.form__container--input').value;
        let textNode = document.createTextNode(inputValue);

        li.className = 'item';
        li.appendChild(textNode);
        if (inputValue !== '') {
            document.querySelector('.list').appendChild(li);
        }

        document.querySelector('.form__container--input').value = '';

        let span = document.createElement('SPAN');
        let text = document.createTextNode('\u00D7');
        span.className = 'close';
        span.appendChild(text);
        li.appendChild(span);

        let close = document.querySelectorAll('.close');

        close.forEach(elem => {
            elem.onclick = function () {
                let listItem = this.parentElement;
                listItem.style.display = 'none';
            }
        });
    }

    onEnterPress() {
        let btn = document.querySelector('.form__container--button');
        document.addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                btn.click();
            }
        })
    }

    addCloseIcon(myNodeList) {
        myNodeList.forEach(elem => {
            let span = document.createElement('SPAN');
            let text = document.createTextNode('\u00D7');
            span.className = 'close';
            span.appendChild(text);
            elem.appendChild(span);
        });
    }

    hideInactiveElements(close) {
        close.forEach(elem => {
            elem.onclick = function () {
                let listItem = this.parentElement;
                listItem.style.display = 'none';
            }
        });
    }

    selectActiveElement(unorderedList) {
        unorderedList.addEventListener('click', function (elem) {
            if (elem.target.tagName === 'LI') {
                elem.target.classList.toggle('checked');
            }
        }, false);
    }
}

let toDoItems = new ToDoApp();
let promise = new Promise(() => {
    toDoItems.onEnterPress();
    toDoItems.addNewItem();
});
promise.then(toDoItems.selectActiveElement(document.querySelector('.list')));