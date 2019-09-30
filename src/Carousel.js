import React from "react";

export default class Carousel extends React.Component {
	static getDerivedStateFromProps({ media }) {
		let photos = ["http://placecorgi.com/600/600"];

		if (media.length) {
			photos = media.map(({ large }) => large);
		}

		return { photos };
	}

	constructor(props) {
		super(props);

		this.state = {
			photos: [],
			active: 0
		};

		this.handleIndexClick = this.handleIndexClick.bind(this);
	}

	render() {
		const { photos, active } = this.state;
		return (
			<div className="carousel">
				<img src={photos[active]} alt="animal" />
				<div className="carousel-smaller">
					{photos.map((photo, index) => (
						// eslint-disable-next-line
						<img
							key={photo}
							alt="animal thumbnail"
							data-index={index}
							src={photo}
							onClick={this.handleIndexClick}
							className={index == active ? "active" : ""}
						/>
					))}
				</div>
			</div>
		);
	}

	handleIndexClick(event) {
		this.setState({
			active: event.target.dataset.index
		});
	}
}
