import Api from '../../Helpers/Api';

const ControllerDashboard = {
    async getDataMovies() {
        try {
            const response = await Api.get('movie/popular');
            const genres = await Api.get('genre/movie/list');

            // set state 
            this.setState({
                movies: response.results,
                genres: genres.genres
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export default ControllerDashboard;