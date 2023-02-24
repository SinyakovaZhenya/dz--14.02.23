import Кремль from "./../img/кремль.jpg";
import МузейЛеденца from "./../img/музейЛеденца.jpg";
import МузейПавлова from "./../img/музейПавлова.jpg";
import ПамятникЕК from "./../img/памятникЕК.jpg";
import ПамятникСЕ from "./../img/памятникСЕ.jpg";



const Attractions = () => {
	return ( 
		<main id="main" className="section">
		<div className="container">
			<div className="attractions">
				<h1 className="title-1">Достопримечательности г.Рязань</h1>
				<img src={Кремль} alt="Attr img" className="attr__img"/>Рязанский Кремль
				<img src={МузейЛеденца} alt="Attr img" className="attr__img"/>Музей истории рязанского леденца
				<img src={МузейПавлова} alt="Attr img" className="attr__img"/>Мемориальный музей-усадьба академика И.П. Павлова
				<img src={ПамятникЕК} alt="Attr img" className="attr__img"/>Памятник Евпатию Коловрату
				<img src={ПамятникСЕ} alt="Attr img" className="attr__img"/>Памятник Сергею Есенину
			</div>
		</div>
		</main>
	);
}

export default Attractions;