

let fifth = document.createElement('li'),
    wrapper = document.querySelector(".menu"),
    lis = document.querySelectorAll(".menu-item"),
    menu = document.getElementsByClassName("menu")[0];
fifth.classList.add("menu-item");
wrapper.appendChild(fifth);
fifth.innerHTML = "Пятый пункт";
wrapper.insertBefore(lis[2],lis[1]);
