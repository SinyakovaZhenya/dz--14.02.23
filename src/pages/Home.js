import { useEffect, useState } from "react";
import homeImg from "./../img/home.jpg";

const Home = () => {

	return ( 
		<>
			<main id="main" className="section">
				<div className="container">
					<p>
						<img src={homeImg} alt="Home img" className="home__img"/>
					</p>
				</div>
			</main> 
		</>
	);		
}

export default Home;