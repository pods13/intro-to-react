import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

export default function SearchParams() {
	const [location, setLocation] = useState("Seattle, WA");
	const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);

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
				<AnimalDropdown />
				<button>Submit</button>
			</form>
		</div>
	);
}
