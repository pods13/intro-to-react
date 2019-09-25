import React from "react";
import Pet from "./Pet";

export default function Results({ pets }) {
	return (
		<div className="">
			{pets.map(pet => {
				const petAddress = pet.contact.address;
				return (
					<Pet
						key={pet.id}
						name={pet.name}
						animal={pet.animal}
						breed={pet.breeds.primary}
						media={pet.photos}
						location={`${petAddress.city}, ${petAddress.state}`}
					/>
				);
			})}
		</div>
	);
}
