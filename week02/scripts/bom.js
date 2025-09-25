const input = document.querySelector("#favchap");
const button = document.querySelector('#submit');
const list = document.querySelector("#list");



//li.textContent = input.value;
//deletebtn.textContent = "❌";
//li.append(deletebtn)
//list.append(li)

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const lichp = document.createElement("li");
        const deletebtn = document.createElement("button");

        lichp.textContent = input.value;
        deletebtn.textContent = "❌";

        deletebtn.addEventListener('click', function () {
            list.removeChild(lichp);
            input.focus();
        });

        lichp.append(deletebtn);
        list.append(lichp);
        input.value = '';

    }
    input.focus();
});


