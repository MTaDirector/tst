import React from 'react';
import Movie from '../components/Movie';

const movies = [
  {
    title: "terminator",
    synopsis: "Sit alias animi nemo numquam optio recusandae, a repudiandae velit commodi ullam dolorem. Dolore nemo natus harum distinctio quae. Ullam, dolore quaerat.",
    ratings: 4,
    date: 1984,
  },
  {
    title: "terminator 2",
    synopsis: "Deserunt tempore eos nostrum assumenda iste ea mollitia rerum nemo. Nam exercitationem dolor neque vel beatae qui recusandae rem unde voluptatibus voluptate.",
    ratings: 5,
    date: 1991,
  },
  {
    title: "terminator 3",
    synopsis: "Alias odio architecto aperiam vitae sapiente tenetur voluptas illum itaque velit iste. Dicta eius ullam cumque, quos quasi quaerat odit rerum officia.",
    ratings: 3,
    date: 2003,
  },
]

const Movies = () => {
  return (
    <div>
        <h2 className="text-2xl text_blue-400">Best movies</h2>
        <ul>
          {
            movies.map((movie)=>
              <li>
                <Movie
                  title={movie.title}
                  synopsis={movie.synopsis}
                  ratings={movie.ratings}
                  date={movie.date}
                />
              </li>
            )
          }
        </ul>
    </div>
  )
}


export default Movies;
