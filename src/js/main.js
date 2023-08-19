const courseButton = document.getElementById('coursesButton');

courseButton.addEventListener('click', function() {
    let coursesList = document.getElementById('courses');
    let arrowImage = document.querySelector('.navigation-arrow');

    if (coursesList.style.display === 'none') {
        coursesList.style.display = 'flex';
        arrowImage.classList.remove('arrow-down');
        arrowImage.classList.add('arrow-up');
    } else {
        coursesList.style.display = 'none';
        arrowImage.classList.remove('arrow-up');
        arrowImage.classList.add('arrow-down');
    }
});