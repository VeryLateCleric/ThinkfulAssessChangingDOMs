import "./styles.css";

/**
  Write the addheadings() function here
*/

function addHeadings() {
  const articles = document.querySelectorAll('.articles article');
  articles.forEach(article => {
    const heading = document.createElement('h2');
    heading.textContent = article.textContent;
    article.innerHTML = '';
    article.appendChild(heading);
  });
}

/**
  Write the styleTutorialsAndArticles() function here
*/

function styleTutorialsAndArticles() {
  const articles = document.querySelectorAll('.articles article');
  articles.forEach(article => {
    if (article.textContent.includes('Tutorial')) {
      article.classList.add('tutorial');
    } else {
      article.classList.add('article');
    }
  });
}

/**
  Write the separateAllTutorials() function here
*/

function separateAllTutorials() {
  const container = document.querySelector('.container');
  const articlesSection = document.querySelector('.articles');
  const tutorials = articlesSection.querySelectorAll('.tutorial');

  if (tutorials.length > 0) {
    const tutorialsSection = document.createElement('section');
    tutorialsSection.classList.add('tutorials');
    tutorials.forEach(tutorial => {
      tutorialsSection.appendChild(tutorial);
    });
    container.appendChild(tutorialsSection);
  }
}

/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
