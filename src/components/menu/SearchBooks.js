import React, {Component} from 'react'
import {Search} from 'semantic-ui-react'
import escapeRegExp from 'escape-string-regexp'

class SearchBooks extends Component {

	componentWillMount() {
		this.resetComponent()
	}

	resetComponent = () => this.setState({isLoading: false, results: [], value: ''});

	handleResultSelect = (e, {result}) => {
		this.setState({value: result.title});
		this.props.onUserSearch(this.state.filteredBooks);
	};

	handleSearchChange = (e, {value}) => {
		const {books, onUserSearch }= this.props;

		this.setState({isLoading: true, value});

		setTimeout(() => {
			if (this.state.value.length < 1) return this.resetComponent();

			const match = new RegExp(escapeRegExp(this.state.value), 'i');

			const filteredBooks = books.filter(book => match.test(book.title));

			const results = filteredBooks.map(book => {
				return {
					image: book.imageLinks.smallThumbnail,
					title: book.title,
					description: book.authors[0]
				}
			});

			this.setState({
				isLoading: false,
				results: results,
				filteredBooks: filteredBooks
			});

			onUserSearch(filteredBooks);
		}, 300)
	};

	render() {
		const {isLoading, value, results} = this.state;
		return (
			<Search
				aligned='left'
				loading={isLoading}
				onResultSelect={this.handleResultSelect}
				onSearchChange={this.handleSearchChange}
				results={results}
				value={value}

				{... this.books}
			/>
		);

	}
}

export default SearchBooks;