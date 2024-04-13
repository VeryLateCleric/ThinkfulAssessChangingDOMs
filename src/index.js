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

function styleTutorialsAndArticles() {}

/**
  Write the separateAllTutorials() function here
*/

function separateAllTutorials () {}

/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
