import React from 'react';
import HomeMenu from '../components/menu/HomeMenu';
import {Container} from 'semantic-ui-react';
import BooksFeed from '../components/BooksFeed';


const Home = ({booksByShelf, shelves, onChange}) => (
	<div className="App">
		<HomeMenu/>
		<Container className='app-container'>
			<BooksFeed booksByShelf={booksByShelf} shelves={shelves} onChange={onChange}/>
		</Container>
	</div>
);

export default Home;