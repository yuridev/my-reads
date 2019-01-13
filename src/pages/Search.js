import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import BooksList from '../components/BooksList';
import SearchMenu from '../components/menu/SearchMenu';
import * as BooksAPI from '../utils/BooksAPI'

class Search extends Component{

	state = {
		searchResults: []
	};

	onUserSearch = searchResults => {
		this.setState({searchResults});
	};

	onChange = (bookToChange, shelf) => {

        BooksAPI.update(bookToChange, shelf).then(() => {

            this.setState(state => {
            	return {searchResults: state.searchResults.filter((book) => book.id !== bookToChange.id)}
            })

        });


    }

	render(){
		const {books, shelves} = this.props;
		const {onUserSearch, onChange} = this;
		const results = this.state.searchResults;

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