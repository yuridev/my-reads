import React, {Component} from 'react';
import {Button, Container, Menu, Item} from 'semantic-ui-react';
import * as BooksAPI from '../utils/BooksAPI'
import {Link} from 'react-router-dom';

class Detail extends Component {
	state = {
		book: ''
	};

	componentDidMount() {
		BooksAPI.get(this.props.match.params.id).then(book => {
			this.setState({book});
		});
	}

	render() {
		const {book} = this.state;
		const items = [];
		if(book){
			items.push(
				{
					childKey: 0,
					image: book.imageLinks.thumbnail,
					header: book.title,
					description: book.description,
					meta: book.authors.map(author => {return author+', '}),
					extra: <a href={book.previewLink}><Button>More</Button></a>,
				})
		}

		return (
			<div>
				<Menu className="App-bar">
					<Menu.Item position='left'>
						<Link to='/'><Button className='button-search' icon='arrow left'/></Link>
						<div className="App-title">My reads</div>
					</Menu.Item>
				</Menu>
				<Container>
					{!!book && (
						<Item.Group items={items}/>
					)}
				</Container>
			</div>
		);
	}
}

export default Detail;