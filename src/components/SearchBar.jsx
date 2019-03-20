import React, { Component } from 'react';

export default class SearchBar extends Component {
	
	state = {
		term: ''
	}

	onInputChange = ({ target }) => {
		this.setState({ term: target.value })
	}

	onFormSubmit = event => {
		event.preventDefault();

		this.props.onFormSubmit(this.state.term)
	}

	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={ this.onFormSubmit } className="ui form">
					<div className="field">
						<label >Video Search</label>
						<input value={this.state.term} onChange={ this.onInputChange } type="text"/>
					</div>
				</form>
			</div>
		)
	}
}