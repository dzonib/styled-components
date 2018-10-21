import React from 'react'
import { Link } from 'react-router-dom'

import Nav from '../Nav/Nav'

import { Logo, StyledHeader } from './Header.styled'

const Header = (props) => (
	<StyledHeader>
		<div className="bar">
			<Logo>
				<Link to="/">Logo</Link>
			</Logo>
			<Nav />
		</div>
		<div className="sub-bar">
			<p>Search</p>
		</div>
		<div>
			<p>Cart</p>
		</div>
	</StyledHeader>
)

export default Header
