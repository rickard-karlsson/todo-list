const inputTextField = document.querySelector('#textfield');
const addItemButton = document.querySelector('#addButton');
const theWholeList = document.querySelector('#theWholeList');

addItemButton.addEventListener('click', () => {
  const newListItem = document.createElement('article')
  const thingToDo = document.createElement('div')
  const strikeButton = document.createElement('button');
  strikeButton.textContent = 'Strike';
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  newListItem.setAttribute('class', 'listItem');
  thingToDo.setAttribute('class', 'thingToDo');
  thingToDo.innerHTML = `${inputTextField.value}`;
  
  newListItem.appendChild(thingToDo);
  newListItem.appendChild(strikeButton);
  newListItem.appendChild(removeButton);

  strikeButton.addEventListener('click', (e) => {
    e.target.previousElementSibling.style['text-decoration'] = 'line-through';
  });

  removeButton.addEventListener('click', (e) => {
    e.target.parentNode.setAttribute('id', 'removeThisShit');
    e.target.parentNode.parentNode.removeChild(document.querySelector('#removeThisShit'));
  });

  theWholeList.appendChild(newListItem);
});