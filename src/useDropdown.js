import React, { useState } from "react";

export default function useDropdown(label, defaultState, options) {
	const [state, setState] = useState(defaultState);
	const id = label.replace(" ", "-").toLowerCase();
	const Dropdown = () => (
		<label htmlFor={id}>
			{label}
			<select
				id={id}
				value={state}
				onChange={e => setState(e.target.value)}
				onBlur={e => setState(e.target.value)}
			>
				<option value="all">all</option>
				{options.map(item => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
		</label>
	);

	return [state, Dropdown, setState];
}
