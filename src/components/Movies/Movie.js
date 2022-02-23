import React, { PureComponent } from 'react'
import './Movies.css'

class Movie extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        const {
            config,
            movie
        } = this.props

        const base_url = config && config.images.secure_base_url

        return (
            
            <li style={{"margin": "30px","width":"100px"}} className="Movie">
                { base_url && <picture>
                    <source srcSet={base_url + '/w92/' + movie.poster_path} media="(max-width: 500px)" />
                    <source srcSet={base_url + '/w185/' + movie.poster_path} />
                    <img style={{"width": "250px","margin": "30px"}} className="Movie__Poster__Image" src={base_url + '/w185/' + movie.poster_path} alt={'Poster of ' + movie.title + ' movie'} />
                </picture> }
                <h2 className="Movie__Title">{movie.title}</h2>

                    <div className="movie_overview">
                    <h2> Overview:</h2>
                    <p>{movie.overview}</p> 
                    </div>
            </li>
        
        )
    }
}

export default Movie