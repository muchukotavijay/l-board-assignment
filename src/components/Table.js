import React, {Component} from 'react';
import {usersJSON} from '../data';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON
		}
	}

	// sets the users state object after the sort
	// Suggestion : getDerivedStateFromProps would be the best way to do

	componentWillReceiveProps(nextProps) {
		
		// if nextProps, current objects props are same then don't sort
		if(nextProps.sortBy !== this.props.sortBy) {
			let users = this.state.users;
			// if sortBy is age then 
			// Suggestion : Instead of using 4 compare methods single method can be used 
			if(nextProps.sortBy === 'age') {
				users = users.sort((a, b) => this.compareByAge(a, b));
			} else if (nextProps.sortBy === 'name') { // if sortBy is name 
				users = users.sort((a, b) => this.compareByName(a, b));
			} else if (nextProps.sortBy === 'points') { // if sortBy is points 
				users = users.sort((a, b) => this.compareByPoints(a, b));
			} else if (nextProps.sortBy === 'rank') { // if sortBy is rank 
				users = users.sort((a, b) => this.compareByRank(a, b));
			}


			this.setState({
				users: users
			})
		}	
	}

	// complete the comparators
	compareByAge(a, b) {
		return a.age-b.age;
	}

	// compares two names
	compareByName(a, b) {
		const nameA = a.name.toLowerCase();
		const nameB	=	b.name.toLowerCase()
		if (nameA < nameB)
			return -1 
		if (nameA > nameB)
			return 1
		return 0
	}

	// compares two points
	compareByPoints(a, b) {
		return a.points - b.points;
	}

	// compares two ranks
	compareByRank(a, b) {
		return a.rank-b.rank;
	}

	// compares two ages
	compareByAge = (a, b) => {
		return a.age-b.age;
	}

	render() {
		// users object from the state
		let users = this.state.users;

		// if sortBy prop exists thats when sort users
		if(this.props.sortBy) {
			if(this.props.sortBy === 'age') {
				users = users.sort((a, b) => this.compareByAge(a, b));
			} else if (this.props.sortBy === 'name') { // if sortBy is name 
				users = users.sort((a, b) => this.compareByName(a, b));
			} else if (this.props.sortBy === 'points') { // if sortBy is points 
				users = users.sort((a, b) => this.compareByPoints(a, b));
			} else if (this.props.sortBy === 'rank') { // if sortBy is rank 
				users = users.sort((a, b) => this.compareByRank(a, b));
			}
		}
		return (<div>
			<table className="table table-striped">
				<thead>
					<tr key="head">
						<th>Age</th>
						<th>Name</th>
						<th>Points</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => {
						return (
							<tr key={index}>
								<td>{user.age}</td>
								<td>{user.name}</td>
								<td>{user.points}</td>
								<td>{user.rank}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>)
	}
}
