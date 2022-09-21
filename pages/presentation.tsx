import Layout from "../components/layout/layout"
import Abstract from "../components/presentation/Abstract"
import Razines_2022 from "../components/presentation/Razines_2022"
import Rivaud_2022 from "../components/presentation/Rivaud_2020"
export default function Presentation () {
	return (
		<Layout>
			<Abstract />
			<br />
			<br />
			<h1>Nos sorties</h1>
			<Razines_2022 />
			<Rivaud_2022 />
		</Layout>
	)
}