import React from 'react';
import './home.css';

class Home extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="header_text">Free to play games</div>		
				<div className="menu_btn"><img src={require("../../assets/menu.png")} alt="menu button" /></div>
			</div>
		);
	}
}

export default Home;
