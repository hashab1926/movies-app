import { Component } from 'react';
import Loading from '../../Components/Templates/Loading';

import { eventBindings } from '../../Helpers/Events';
import ControllerDashboard from '../Controllers/ControllerDashboard';
import './Dashboard.scss';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            genres: []
        };

        // eventBindizngs(this,['']);
    }


    render() {
        let x = 0;
        return (
            <section className="section-content">
                <h2 className="title-section">New Releases</h2>
                <br />

                {this.state.movies.length <= 0 ? <Loading /> :
                    <section className="content-list">
                        {this.state.movies.map((movie, key) => {
                            x = 0;
                            return (
                                <div className="wrapper-item" key={key}>

                                    <img className="image-item" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                    <div className="rating-overlay">{movie.vote_average}</div>

                                    <div className="wrapper-title">
                                        <div className="title">{movie.original_title}</div>
                                        <div className="genre">{this.state.genres?.map((genre, key) => {
                                            if (movie.genre_ids.includes(genre.id)) {
                                                if (x++ == movie.genre_ids.length - 1)
                                                    return genre.name;
                                                else
                                                    return `${genre.name}, `;
                                            }
                                        })
                                        }</div>
                                    </div>

                                </div>
                            )
                        })}
                    </section>
                }

            </section>
        );

    }

    componentDidMount() {
        setTimeout(() => {

            this.getDataMovies();
        }, 1300);
    }
}

Object.assign(Dashboard.prototype, ControllerDashboard);
export default Dashboard;