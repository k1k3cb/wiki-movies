// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const containerElement = document.getElementById('container');

const getMovies = async () => {
	try {
		const moviesResp = await fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=f39cfec1279850f323e6ac1c60aa5dc4&language=es-ES'
		);

		// console.log(moviesResp);

		if (moviesResp.status === 200) {
			const moviesData = await moviesResp.json();

			let movies = '';
			moviesData.results.forEach(movie => {

				movies += `<h1>${movie.title}</h1>`;
        
			});

			containerElement.innerHTML = movies;
		} else if (moviesResp.status === 401) {
			console.log('Invalid key');
		} else if (moviesResp.status === 404) {
			console.log('La película no existe');
		} else {
			console.log('Hubo un error');
		}
	} catch (error) {
		console.error(error);
	}
};

getMovies();
