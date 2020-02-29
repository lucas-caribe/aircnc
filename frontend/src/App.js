import React from 'react';
import './App.css';

import logo from './assets/logo.svg'

function App() {

	function handleSubmit(e) {
		e.preventDefault()
	}

	return (
		<div className="container">
			<img src={logo} alt="AirCnC" />

			<div className="content">
				<p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>
				<form onSubmit={handleSubmit}>
					<label htmlFor="email">E-MAIL *</label>
					<input
						type="email"
						id="email"
						placeholder="seu email"
					/>
					<button type="submit" className="btn">Entrar</button>
				</form>
			</div>
		</div>
	);
}

export default App;
