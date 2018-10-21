import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Sell from './Components/Sell'
import Home from './Components/Home'
import Header from './Components/Header/Header'


const theme = {
	red: '#FF0000',
	black: '#393939',
	gray: '#3A3A3A',
	lightGrey: '#E1E1E1',
	offWhite: '#EDEDED',
	maxWidth: '1000px',
	bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
}


const GlobalStyle = createGlobalStyle `
	html {
		box-sizing: border-box;
		font-size: 10px;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		padding: 0;
		margin: 0;
		font-size: 1.5rem;
		line-height: 2;
		font-family: 'Montserrat', sans-serif;
	}

	a {
		text-decoration: none;
		color: ${theme.black}
	}
`



const StyledPage = styled.div`
	color: ${props => props.theme.black}
`

const Inner = styled.div`
	max-width: ${(props) => props.theme.maxWidth};
	margin: 0 auto;
	padding: 2rem;
`

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
			<StyledPage>
			<GlobalStyle />
			<Router>
				<> 
					<Header />
					<Inner>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/sell" component={Sell} />
						</Switch>
					</Inner>
					</>
				</Router>
			</StyledPage>
			
			</ThemeProvider>
		)
	}
}

export default App
