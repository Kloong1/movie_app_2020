import React from 'react';
import axios from "axios";
import Movie from "../components/Movie"
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <h1 className="loader__text">Loading...</h1>
          </div>
        ) : (
          <div className="movies">
            <h1 style={{textAlign:"center"}}>Movies</h1>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                genres={movie.genres}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;