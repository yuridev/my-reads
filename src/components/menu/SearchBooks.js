import React, {Component} from 'react'
import *  as BooksAPI from '../../utils/BooksAPI'
import { Debounce } from 'react-throttle';

class SearchBooks extends Component {

	componentWillMount() {
		this.resetComponent()
	}

	resetComponent = () => this.setState({isLoading: false, results: [], value: ''});

	handleSearchChange = (e) => {

		const { onUserSearch } = this.props;

        this.setState({isLoading: true, value: e.target.value});

        BooksAPI.search(e.target.value).then((data) => {

            const results = data && data.length ? data.map(book => {
                return {
					id: book.id,
                    image: book.imageLinks ? book.imageLinks.smallThumbnail : 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjSi5unz-vfAhUGfZAKHXgwB38QjRx6BAgBEAU&url=http%3A%2F%2Fsimpsons.wikia.com%2Fwiki%2FFile%3ANo_Image_Available.png&psig=AOvVaw2GBZQbUSrscB2R44mqv1bJ&ust=1547498503231114',
                    title: book.title,
                    description: book.authors ? book.authors[0] : 'Unknown'
                }
            }) : [];

            onUserSearch(results);

        });

	};

	render() {

		return (

			<Debounce time="500" handler="onChange">
				<input onChange={this.handleSearchChange} />
			</Debounce>
		);

	}
}

export default SearchBooks;