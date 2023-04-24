const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//show siderbar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

//close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

//change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});


const imageUploader = document.querySelector("input");
const imagePreview = document.querySelector("#exemplo");

function showImage() {
    let reader = new FileReader();
    reader.readAsDataURL(imageUploader.files[0]);
    reader.onload = function (e) {
        imagePreview.classList.add("show");
        imagePreview.src = e.target.result;
    };
}