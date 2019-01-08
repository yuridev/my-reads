import React from 'react';
import {Button, Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const HomeMenu = () => (
	<Menu className="App-bar">
		<Menu.Item position='left'>
			<div className="App-title">My reads</div>
		</Menu.Item>

		<Menu.Item position='right'>
			<Link to='/search'>
				<Button className='button-search' icon='search'/>
			</Link>
		</Menu.Item>
	</Menu>
);

export default HomeMenu;