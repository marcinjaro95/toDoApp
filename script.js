const myNodeList = document.querySelectorAll('LI');

myNodeList.forEach(elem => {
    let span = document.createElement('SPAN');
    let text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    elem.appendChild(span);
});


const close = document.querySelectorAll('.close');

close.forEach(elem => {
    elem.onclick = function () {
        let div = this.parentElement;
        div.style.display = 'none';
    }
});

const unorderedList = document.querySelector('ul');

unorderedList.addEventListener('click', function (elem) {
    if (elem.target.tagName === 'LI') {
        elem.target.classList.toggle('checked');
    }
}, false);

function refreshElements() {

}

function addNewItem() {

    let li = document.createElement('li');
    let inputValue = document.querySelector('.form__container--input').value;
    let textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    if (inputValue) {
        document.querySelector('.list').appendChild(li);
    } else {
        alert("C'mon - you should write something, don't be so lazy !");
    }

    document.querySelector('.form__container--input').value = '';

    let span = document.createElement('SPAN');
    let text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(span);

    let close = document.querySelectorAll('.close');

    close.forEach(elem => elem.onclick = function () {
        let div = this.parentElement;
        div.style.display = 'none';
    });
}
/*
const storagedItems = {
    'content': (function () {
        let array = [];
        let items = document.querySelectorAll('LI');
        for(let i =0; i<items.length;i++) {
           array.push( items[i].textContent.split(/.$/)[0].split(','));
        }
        return array;
    })()
};

setItemInLocalStorage = function () {
     localStorage.setItem('list', JSON.stringify(storagedItems.content));
};

const getItemFromLocalStorage = function () {
    if(localStorage.getItem('list')) {
        let items = localStorage.getItem('list');
        for(let i = 0; i<items.length;i++) {

        }
    }
}; */