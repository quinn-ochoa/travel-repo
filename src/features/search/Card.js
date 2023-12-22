import React from 'react';

function Card({place}) {
  return(
    <div >
      <img className="" alt={place.name} src={process.env.PUBLIC_URL + place.imgPath} />
      <div>
        <h2>{place.name}</h2>
        <p>{place.email}</p>
      </div>
    </div>
  );
}

export default Card;