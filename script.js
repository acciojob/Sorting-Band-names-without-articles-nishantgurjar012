//your code here
 let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Aerosmith', 'The Beatles', 'Pink Floyd', 'Queen'];

    // Function to remove articles from the band name
    function removeArticles(name) {
      const articles = ['a', 'an', 'the'];
      const words = name.split(' ');
      return words.filter(word => !articles.includes(word.toLowerCase())).join(' ');
    }

    // Sorting the band names in lexicographic order (excluding articles)
    bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

    // Displaying the sorted band names in the 'ul' element with 'id='band''
    const ulElement = document.getElementById('band');
    bandNames.forEach(name => {
      const liElement = document.createElement('li');
      liElement.textContent = name;
      ulElement.appendChild(liElement);
    });

