import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="menu_btn"><img src={require("../../assets/menu.png")} alt="menu button" /></div>
			</div>
		);
	}
}

export default Home;
