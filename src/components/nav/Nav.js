import { NavLink } from "react-router-dom";
import Gerb from "./../../img/gerb.png";
import "./style.css";



const Nav = () => {

	const activeLink = "nav-list__link nav-list__link--active";
	const noLink = "nav-list__link";

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<NavLink to="/" className="logo">
						<p>
							<img src={Gerb} alt="Gerb img" className="gerb__img"/>
						</p>
						<strong>Рязань</strong>
					</NavLink>
					<ul className="nav-list">
						<li className="nav-list__item">
							<NavLink to="/city" className={({isActive}) => {
								return isActive ? activeLink : noLink;
							}}>
								О городе
							</NavLink>
						</li> 
						<li className="nav-list__item">
							<NavLink to="/difference" className={({isActive}) => {
								return isActive ? activeLink : noLink;
							}}>
							Главная достопримечательность
							</NavLink>
						</li> 
						<li className="nav-list__item">
							<NavLink to="/attractions" className={({isActive}) => {
								return isActive ? activeLink : noLink;
							}}>
								Достопримечательности
							</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink to="/gallery" className={({isActive}) => {
								return isActive ? activeLink : noLink;
							}}>
								Галерея
							</NavLink>
						</li> 
					</ul>
				</div>
			</div>
		</nav>);
}

export default Nav;