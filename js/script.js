const toggleIcon = document.querySelector('.toggle-icon');
const sidebar = document.querySelector('.sidebar');
const sidebarLinks = document.querySelectorAll('.list');

const tabs = document.querySelectorAll('.main-column2 ul li');
const tabContent = document.querySelectorAll('.main-column2__cards');

toggleIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

for (let i = 0; i < sidebarLinks.length; i++) {
    sidebarLinks[i].onclick = function() {
        let j = 0;
        while (j < sidebarLinks.length) {
            sidebarLinks[j++].className = 'list';
        }
        sidebarLinks[i].className = 'list active';
    } 
}

tabs[0].classList.add('active');
tabContent[0].classList.add('active');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
        // Remove active tabs
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('active');
            tabContent[j].classList.remove('active');
        }

        tabs[i].classList.add('active');
        tabContent[i].classList.add('active');
    })
}
