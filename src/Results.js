import React from "react";
import Pet from "./Pet";
import get from "lodash/get";

export default function Results({ pets }) {
	return (
		<div className="search">
			{pets.length == 0 ? (
				<h1>No pets found</h1>
			) : (
				pets.map(pet => {
					const petAddress = get(pet, "contact.address", "");
					const breed = get(pet, "breeds.primary", "");
					return (
						<Pet
							key={pet.id}
							id={pet.id}
							name={pet.name}
							animal={pet.type}
							breed={breed}
							media={pet.photos}
							location={`${petAddress.city}, ${petAddress.state}`}
						/>
					);
				})
			)}
		</div>
	);
}

Results.defaultProps = {
	pets: []
};
