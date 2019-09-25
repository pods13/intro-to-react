import React from "react";

export default function Pet({ name, animal, breed, location, id, media }) {
	return (
		<a href={`/details/${id}`} className="pet">
			<div className="image-container">
				<img src={getHeroImage(media)} alt={name} />
			</div>
			<div className="info">
				<h2>{name}</h2>
				<h2>{`${animal} - ${breed} - ${location}`}</h2>
			</div>
		</a>
	);
}

const getHeroImage = media => {
	return media.length ? media[0].small : `http://placecorgi.com/300/300`;
};
