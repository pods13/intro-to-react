import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

export default function SearchParams() {
	const [location, setLocation] = useState("Seattle, WA");
	const [animal, setAnimal] = useState("dog");

	return (
		<div className="search-params">
			<form>
				<label htmlFor="location">
					Location:
					<input
						id="location"
						value={location}
						placeholder="Location"
						onChange={e => setLocation(e.target.value)}
					/>
				</label>
				<label htmlFor="animal">
					Animal
					<select
						name="animal"
						id="animal"
						value={animal}
						onChange={e => setAnimal(e.target.value)}
						onBlur={e => setAnimal(e.target.value)}
					>
						<option value="all">all</option>
						{ANIMALS.map(animal => (
							<option key="{animal}" value="{animal}">
								{animal}
							</option>
						))}
					</select>
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
}
