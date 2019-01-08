import React, {Component} from 'react'
import { List} from 'semantic-ui-react'
import BooksList from './BooksList'

class BooksFeed extends Component {
	render() {
		const {booksByShelf, shelves, onChange} = this.props;

		let booksLists = [];
		booksByShelf.forEach( entry => {
			booksLists.push(entry);
		});

		const items = booksLists.map((list, index) => {
			return {key:index, content: (<BooksList title books={list} shelves={shelves} onChange={onChange}/>)}
		});

		return (
			<div className='books-feed'>
				<List items={items}/>
			</div>
		);
	}
}

export default BooksFeed;