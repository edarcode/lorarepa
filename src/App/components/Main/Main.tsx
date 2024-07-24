import { joinClassNames } from "../../../services/joinClassNames";
import css from "./css.module.css";
import { Props } from "./types";

export default function Main({ className }: Props) {
	const finalClassName = joinClassNames([css.main, className]);

	return <main className={finalClassName}>main</main>;
}
