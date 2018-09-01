class StorageClass {
  constructor() {
    this.items = [];
    this.btnSave = document.querySelector('.form__container--button-save');
    this.addClickOnBtn();
    this.getItemFromLocalStorage();
  }

  addClickOnBtn() {
    this.btnSave.addEventListener('click', () => {
      this.setItemInLocalStorage();
    });
  }

  prepareItemsToSave() {
    const array = [];
    const str = ['[R]', '[C]'];
    this.items = document.querySelectorAll('.item');
    this.items.forEach((elem) => {
      if (!elem.hasAttribute('style') && !elem.classList.contains('checked')) {
        array.push(elem.textContent.split(/.$/)[0].split(',') + str[0]);
      }
      if (elem.classList.contains('checked') && !elem.hasAttribute('style')) {
        array.push(elem.textContent.split(/.$/)[0].split(',') + str[1]);
      }
    });
    return array;
  }

  setItemInLocalStorage() {
    localStorage.setItem('list', JSON.stringify(this.prepareItemsToSave()));
  }

  prepareItemsToShow(item) {
    if (item) {
      const li = document.createElement('li');
      const textNode = document.createTextNode(item.replace(/\[R\]|\[C\]|^.|.$/g, ''));
      const span = document.createElement('SPAN');
      const text = document.createTextNode('\u00D7');

      li.classList.add('item');
      if (item.match('[C]')) {
        li.classList.add('checked');
      }
      li.appendChild(textNode);
      document.querySelector('.list').appendChild(li);
      span.className = 'close';
      span.appendChild(text);
      li.appendChild(span);
      this.close = document.querySelectorAll('.close');

      this.close.forEach((elem) => {
        elem.onclick = function assign() {
          const listItem = this.parentElement;
          listItem.style.display = 'none';
        };
      });
    }
  }

  getItemFromLocalStorage() {
    if (localStorage.getItem('list')) {
      const items = localStorage.getItem('list').replace(/^.|.$/g, '').split(',');
      items.forEach((elem) => {
        this.prepareItemsToShow(elem);
      });
    }
  }
}
const storage = new StorageClass();
