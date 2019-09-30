import React from "react";
import pet from "@frontendmasters/pet";
import get from "lodash/get";

export default class DetailsPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true
		};
	}

	componentDidMount() {
		pet.animal(this.props.id).then(({ animal }) => {
			const breed = get(animal, "breeds.primary", "");
			const petAddress = get(animal, "contact.address", "");
			this.setState({
				name: animal.name,
				description: animal.description,
				animal: animal.type,
				breed,
				location: `${petAddress.city}, ${petAddress.state}`,
				media: animal.photos,
				loading: false
			});
		}, console.error);
	}

	render() {
		if (this.state.loading) {
			return <h1>Loading...</h1>;
		}
		const { name, animal, breed, location, description } = this.state;
		return (
			<div className="details">
				<div>
					<h1>{name}</h1>
					<h2>{`${animal} - ${breed} - ${location}`}</h2>
					<button>Adopt {name}</button>
					<p>{description}</p>
				</div>
			</div>
		);
	}
}
