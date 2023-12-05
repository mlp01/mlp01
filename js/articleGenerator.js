document.addEventListener('DOMContentLoaded', function () {
  function getRandomColor() {
    // Function to generate a random color
    // (Same as in the previous example)
  }

  function createArticle(title, categories) {
    const article = document.createElement('article');
    const articleTitle = document.createElement('h2');
    articleTitle.textContent = title;
    articleTitle.style.color = getRandomColor(); // Set random color for article title
    article.appendChild(articleTitle);

    const articleContent = document.createElement('div');
    articleContent.className = 'article-content';

    categories.forEach(category => {
      const categoryTitle = document.createElement('h3');
      categoryTitle.textContent = category.title;
      categoryTitle.style.color = getRandomColor(); // Set random color for h3 element

      const categoryText = document.createElement('div');
      categoryText.innerHTML = category.text; // Use innerHTML to insert HTML content

      const categoryDiv = document.createElement('div');
      categoryDiv.appendChild(categoryTitle);
      categoryDiv.appendChild(categoryText);

      articleContent.appendChild(categoryDiv);
    });

    article.appendChild(articleContent);

    return article;
  }

  // Example usage with bullet list and image
  const exampleCategories = [
    { title: 'List Example', text: '<ul><li>Item 1</li><li>Item 2</li></ul>' },
    { title: 'Image Example', text: '<img src="path/to/your/image.jpg" alt="Example Image">' },
    { title: 'Normal Text', text: 'This is a regular text.' }
  ];

  const articleContainer = document.getElementById('article-container');
  articleContainer.appendChild(createArticle('Example Article', exampleCategories));
});