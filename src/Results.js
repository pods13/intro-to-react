import React from "react";
import Pet from "./Pet";

export default function Results({ pets }) {
	return (
		<div className="search">
			{pets.length == 0 ? (
				<h1>No pets found</h1>
			) : (
				pets.map(pet => {
					const petAddress = pet.contact.address;
					return (
						<Pet
							key={pet.id}
							name={pet.name}
							animal={pet.type}
							breed={pet.breeds.primary}
							media={pet.photos}
							location={`${petAddress.city}, ${petAddress.state}`}
						/>
					);
				})
			)}
		</div>
	);
}
