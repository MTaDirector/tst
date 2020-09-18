import React from 'react';


const Movie = ({title, synopsis, ratings, date}) => {
  return (
    <div>
      <h4>{ title }</h4>
      <p>{ synopsis }</p>
      <p>{ ratings }</p>
      <p>{ date }</p>
    </div>
  )
}


export default Movie;

