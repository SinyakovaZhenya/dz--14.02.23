import DifImg from "./../img/difImg.jpg";

const Difference = () => {
	return ( 
		<main id="main" className="section">
		<div className="container">
			<div className="project-details">
				<h1 className="title-1">Главная достопримечательность г.Рязань</h1>
   			<p>
					<img src={DifImg} alt="Dif img" className="dif__img"/>Памятник "Грибы с глазами"
				</p>
			</div>
		</div>
		</main>
	);
}

export default Difference;