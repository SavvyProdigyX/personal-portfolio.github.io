const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY> 90);
});

const tamu = prompt('Siapakah Anda?');
alert('Selamat datang, ' + tamu + '!');

