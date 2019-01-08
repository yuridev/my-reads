import React, {Component} from 'react';
import {List, Item, Button, Divider} from 'semantic-ui-react';
import * as StringUtils from '../utils/StringUtils';
import Link from 'react-router-dom/es/Link';

class Book extends Component {
	state = {
		hiddenOptions: true
	};

	onClickOptions = () => {
		this.setState(state => {
			return {hiddenOptions: !state.hiddenOptions}
		});
	};

	hideMenu = () => {
		this.setState({hiddenOptions: false});
	};

	onOptionClick = (ev, data) => {
		const book = this.props.data;
		const newShelf = StringUtils.removeSpaces(data.children);
		this.onClickOptions();

		this.props.onChange(book, newShelf);
	};

	render() {
		const book = this.props.data;
		let shelves = this.props.shelves;
		shelves = shelves.filter(shelf => book.shelf !== shelf).map(shelf => StringUtils.toPhraseUpperCase(shelf));

		let menuItems = [];
		menuItems.push(
			{
				key: 'move-to',
				content: (
					<div>
						<div className='shelf-menu-title'>
							Move to
						</div>
						<Divider/>
					</div>
				)
			});

		shelves.forEach((shelf, index) => {
			menuItems.push({
				key: index,
				content: (
					<Button className='change-shelf-menu' onClick={this.onOptionClick}>{shelf}</Button>)
			});
		});

		return (

			<div className='book'>
				<Item>
					<Item.Content>
						<Link to={'/book/' + book.id}>
							<Item.Image rounded
										className='book-image' size='small'
										src={book.imageLinks.smallThumbnail}/>
						</Link>

						<Button className='book-edit' circular icon='edit' onClick={this.onClickOptions}/>

						<div className='change-shelf-menu' hidden={this.state.hiddenOptions}
							 onMouseLeave={this.onClickOptions} onTouchMove={this.hideMenu}>
							<List className='change-shelf-menu' items={menuItems}/>
						</div>
						<Item.Header className='book-title'>{book.title}</Item.Header>
						<Item.Description className='book-authors'>
							{book.authors.map(author => {
								return author
							})}
						</Item.Description>
					</Item.Content>
				</Item>
			</div>


		);
	}
}

export default Book;