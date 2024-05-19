const topBtn = document.getElementById('top_btn');

topBtn.addEventListener('click', () => {
    window.scroll({ top: 0, behavior: 'smooth' });
});

window.onscroll = function() {
    const topBtnSec = document.querySelector('.top_btn_sec');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtnSec.style.display = 'block';
    } else {
        topBtnSec.style.display = 'none';
    }
}

// error in last project
const clgProject = document.getElementById('clg');

clgProject.addEventListener("click", ()=> {
    alert('Failed to load the page');
});

// Web Link
const surojitPage = document.getElementById('web_link');

surojitPage.addEventListener('click', ()=> {
    window.location.href = 'https://surojitacademy.com/index.php';
});