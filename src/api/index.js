const apiKey = '29c85cb4c95ff7a05f69411ec90dc6f2';

async function searchMovie(searchContent) {
  try {
    const query = encodeURIComponent(searchContent);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      // Assuming you want to return the first result
      const movie = data.results[0];
      console.log(movie);
      return {
        title: movie.title,
        releaseDate: movie.release_date,
        overview: movie.overview,
        posterPath: movie.poster_path,
      };
    } else {
      throw new Error('Movie not found.');
    }
  } catch (error) {
    throw new Error('Error fetching movie data. Please try again later.');
  }
}

searchMovie('The Matrix');
