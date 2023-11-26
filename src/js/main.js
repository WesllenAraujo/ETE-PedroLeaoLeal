function variables() {
    const courseButton = document.getElementById('coursesButton');
    let coursesList = document.getElementById('courses');
    let arrowImage = document.querySelector('.navigation-arrow');

    return { courseButton, coursesList, arrowImage };
}
var { courseButton, coursesList, arrowImage } = variables();
coursesList.style.display = 'none';
courseButton.addEventListener('click', function() {
    var { coursesList, arrowImage } = variables();
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