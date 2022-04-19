(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        let item = store[results[i].ref];
        let tags = item.tags.substr(1).slice(0, -1).split(",");
        appendString += '<div onclick="location.href=' + "'" + item.url + "'" + ';" class="portfolio-item grow">';
        appendString += '<img class="feature-image" src=' + "'" + item.image + "'" + ' alt="">';
        appendString += '<div class="portfolio-item-text">';
        appendString += '<p class="post-date">' + item.date + '</p>';
        appendString += '<h1 class="code-font"><a href="' + item.url + '">' + item.title + '</a></h1>';
        appendString += '<div class="extra-info">';
        appendString += '<p>' + item.excerpt + '</p>';
        appendString += '<div>';
        appendString += '<ul class="post-tags">';

        // for loop to iterate over all of our tags so that we can append them to our unordered list
        for (let i = 0; i < tags.length; i ++) {
          let tag = tags[i].replaceAll("&quot;", '');       // using "&quot; as this is the quotation mark in html markup"
          appendString += '<li> # ' + tag + '</li>';
        }
        
        appendString += '</ul>';

        appendString += '</div>';
        appendString += '</div>';
        appendString += '</div>';
        appendString += '</div>'
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('category');
      this.field('content');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'author': window.store[key].author,
        'category': window.store[key].category,
        'content': window.store[key].content
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();
