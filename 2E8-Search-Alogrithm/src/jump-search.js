function jumpMovies(items, value) {
    var n = items.length;
    var blockSize = Math.floor(Math.sqrt(n));
    var start = 0;
    var end = blockSize;
  
    while (value > items[Math.min(end, n)-1]) {
      start = end;
      end += blockSize;
      if (start >= n) {
        return -1;
      }
    }
  
    while (items[start] < value) {
      start++;
      if (start == Math.min(end, n)) {
        return -1;
      }
    }
  
    if (items[start] == value) {
      return start;
    } else {
      return -1;
    }
  }
  


  var movies = ['Agent Salt', 'Alien', 'American Psycho', 'Apocalypto', 'Avengers', 'Back to the future', 'Black Panther', 'Black Widow', 'Blade Runner', 'Bourne', 'Bride and bridges', 'Casablanca', 'Citizen Kane', 'Crouching Tiger, Hidden Dragon', 'Dead Pool', 'E.T.', 'Fearless', 'Gone with the wind', 'Goodfellas', 'Gravity', 'Green Lantern', 'Hard to kill', 'Harry Potter', 'Hellboy', 'Hitman', 'Hulk', 'Hunger Games', 'Inception', 'Interstellar', 'Iron Man', 'John Wick', 'Lilo & Stitch', 'Lord of the Rings', 'Miracle in cell no. 7', 'Mission: Impossible', 'Nobody', 'Pretty Woman', 'Pulp Fiction', 'Puss in boots', 'Roma', 'Saving Private Ryan', 'Schindlers List', 'Shrek', 'Star Wars', 'Taken', 'Taxi Driver', 'Terminator', 'The Dark Knight', 'The Exorcist', 'The Godfather', 'The Matrix', 'Titanic', 'Titanic', 'Tomb Rider', 'Top Gun Maverick', 'Toy Story', 'West Side Story', 'X-men'];
  
  var movieIndex = jumpMovies(movies, "Hitman");
  
  if (movieIndex === -1) {
    console.log("La película no se encontró en la lista.");
  } else {
    console.log("La película " + movies[movieIndex] + " está en la posición " + movieIndex + " en la lista.");
  }
  