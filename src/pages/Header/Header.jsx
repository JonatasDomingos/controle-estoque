import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

import './Header.css'

export default class MenuExampleHeader extends Component {
	state = {}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state

		return (
			<div className='header-menu-container'>
				<Menu inverted>
					<Menu.Item header>Our Company</Menu.Item>
					<Menu.Item
						name='aboutUs'
						active={activeItem === 'aboutUs'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						name='jobs'
						active={activeItem === 'jobs'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						name='locations'
						active={activeItem === 'locations'}
						onClick={this.handleItemClick}
					/>
				</Menu>
			</div>
		)
	}
}