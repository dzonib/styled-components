import React from 'react'
import { Link } from 'react-router-dom'
import {NavStyles} from '../Nav/Nav.styled'

const Nav = (props) => (
	<NavStyles>
		<Link to="/sell">Sell</Link>
		<Link to="/">Home</Link>
	</NavStyles>
)

export default Nav
