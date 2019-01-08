import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import BooksList from '../components/BooksList';
import SearchMenu from '../components/menu/SearchMenu';

class Search extends Component{

	state = {
		searchResults: []
	};

	onUserSearch = searchResults => {
		this.setState({searchResults});
	};

	render(){
		const {books, shelves, onChange} = this.props;
		const {onUserSearch} = this;
		const results = this.state.searchResults.length > 0 ? this.state.searchResults : books;

		return (
			<div className="App">
				<SearchMenu books={books} onUserSearch={onUserSearch}/>
				<Container className='app-container'>
					<BooksList books={results} shelves={shelves} onChange={onChange}/>
				</Container>
			</div>
		);
	}
}

export default Search;