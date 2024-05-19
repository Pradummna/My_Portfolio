const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

const linkSec = document.querySelector('.links');

closeBtn.style.display = 'none';

openBtn.addEventListener('click', () => {
    if (openBtn.style.display = 'block') {
        openBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    }
    linkSec.style.left = '0px';
});

closeBtn.addEventListener('click', () => {
    if (closeBtn.style.display = 'none') {
        openBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    }
    linkSec.style.left = '-100%';
});