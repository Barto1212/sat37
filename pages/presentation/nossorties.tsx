import Razines_2022 from "@text/presentation/Razines_2022"
import Layout from "@layout"
import Rivaud_2022 from "@text/presentation/Rivaud_2020"

export default function Presentation () {
	return (
		<Layout>
			<h1>Nos sorties</h1>
      <Razines_2022 />
      <Rivaud_2022 />
		</Layout>
	)
}