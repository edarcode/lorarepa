import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import css from "./css.module.css";

export default function App() {
	return (
		<div className={css.app}>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
