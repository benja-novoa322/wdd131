const input = document.querySelector("#favchap");
const button = document.querySelector('#submit');
const list = document.querySelector("#list");

button.addEventListener('click', function () {
    if (input.value.trim() !== '')
        input.focus();
    const lii = document.createElement('li');
    const deletebtn = document.createElement('button');
    lii.textContent = input.value;
    deletebtn.textContent = '❌';
    lii.append(deletebtn);
    list.append(lii);
    deletebtn.addEventListener('click', function () {
        list.removeChild(lii);
        input.focus();
    });
    input.value = '';
    input.focus();
});




