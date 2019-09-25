import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";

const findPets = async function(location, breed, type) {
	const { animals } = await pet.animals({
		location,
		breed,
		type
	});

	return animals || [];
};

export default function SearchParams() {
	const [location, setLocation] = useState("Seattle, WA");
	const [breeds, setBreeds] = useState([]);
	const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
	const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
	const [pets, setPets] = useState([]);

	useEffect(() => {
		setBreeds([]);
		setBreed("");

		pet.breeds(animal).then(({ breeds: apiBreeds }) => {
			const breedNames = apiBreeds.map(({ name }) => name);
			setBreeds(breedNames);
		}, console.error);
	}, [animal, setBreeds, setBreed]);

	return (
		<div className="search-params">
			<form
				onSubmit={async e => {
					e.preventDefault();
					const apiPets = await findPets(location, breed, animal);
					setPets(apiPets);
				}}
			>
				<label htmlFor="location">
					Location:
					<input
						id="location"
						value={location}
						placeholder="Location"
						onChange={e => setLocation(e.target.value)}
					/>
				</label>
				<AnimalDropdown />
				<BreedDropdown />
				<button>Submit</button>
			</form>
			<Results pets={pets} />
		</div>
	);
}
