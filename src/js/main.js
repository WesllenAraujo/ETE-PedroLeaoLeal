/* Objetivo: Pegar o momento que o usuário clique no botão de cursos no menu e mostre na tela a gama de cursos oferecidos pela ETE.

PASSO 1° Pegar o botão
PASSO 2° Atribuir o botão a uma variável

PASSO 2° Adicionar um evento de click no botão
PASSO 3° Criar uma função não determinada

PASSO 4° Atriuir o menu de cursos a uma variável
PASSO 5° Atrribuir a imagem do arrow a uma variável

Passo 6° Criar uma estrutura condicional com if que se o menu de cursos estiver sendo exibido na tela, ele deixara oculto, senão ele vai deixar visível.
PASSO 7° mudar a imagem do arrow no botão
*/

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