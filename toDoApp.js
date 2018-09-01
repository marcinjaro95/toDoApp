class ToDoAppClass {
  constructor() {
    this.myNodeList = document.querySelectorAll('.item');
    this.close = document.querySelectorAll('.close');
    this.unorderedList = document.querySelector('.list');
    this.btn = document.querySelector('.form__container--button-add');
    this.selectActiveElement(this.unorderedList);
    this.onEnterPress();
    this.addClickOnBtn();
  }

  addClickOnBtn() {
    this.btn.addEventListener('click', () => {
      this.addNewItem();
    });
  }

  addNewItem() {
    const li = document.createElement('li');
    const inputValue = document.querySelector('.form__container--input').value;
    const textNode = document.createTextNode(inputValue);

    li.className = 'item';
    li.appendChild(textNode);
    if (inputValue !== '') {
      document.querySelector('.list').appendChild(li);
    }

    document.querySelector('.form__container--input').value = '';

    const span = document.createElement('SPAN');
    const text = document.createTextNode('\u00D7');
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

  onEnterPress() {
    document.addEventListener('keyup', (event) => {
      event.preventDefault();
      if (event.keyCode === 13) {
        this.btn.click();
      }
    });
  }

  addCloseIcon() {
    this.myNodeList.forEach((elem) => {
      const span = document.createElement('SPAN');
      const text = document.createTextNode('\u00D7');
      span.className = 'close';
      span.appendChild(text);
      elem.appendChild(span);
    });
  }

  hideInactiveElements() {
    this.close.forEach((elem) => {
      elem.onclick = function hide() {
        const listItem = this.parentElement;
        listItem.style.display = 'none';
      };
    });
  }

  selectActiveElement() {
    this.unorderedList.addEventListener('click', (elem) => {
      if (elem.target.tagName === 'LI') {
        elem.target.classList.toggle('checked');
      }
    }, false);
  }
}

const toDoItems = new ToDoAppClass();
