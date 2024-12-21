const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentPage = 0;

function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.remove('active');
        if (i === index) page.classList.add('active');
    });
}

// Show the first page initially
showPage(currentPage);

// Handle button clicks
prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
});
