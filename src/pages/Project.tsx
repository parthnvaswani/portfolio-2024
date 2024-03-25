import Layout from "../layouts/Layout"
import { useParams } from "react-router-dom";

export default function Project() {
	const { name } = useParams();
	return (
		<Layout>
			<h1>{name}</h1>
		</Layout>
	)
}
