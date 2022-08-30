import Image from "next/image"

const Revues = () => {
	const revues = [
		{
			name: "Abeilles et fleurs",
			link: "logo_abeilles_et_fleurs.jpg",
			size: {with: 300, height: 120},
			edition: "Union Nationnale de l'Apiculture Française",
			prix: 51
		},
		{
			name: "L'abeille de france",
			link: "labeille_de_france.png",
			size: {with: 300, height: 120},
			edition: "Syndicat nationnal d'apiculture",
			prix: 53
		},
		{
			name: "La santé de l'abeille",
			link: "fnosad.gif",
			size: {with: 300, height: 300},
			edition: "Fédération Nationnale des Organisations Sanitaires Apicoles Départementales",
			prix: 49
		},
	]
	return (
		<table>
			<tbody>
				{revues.map(revue => (
					<tr key={revue.link}>
						<td>
							<Image
								src={`/img/revues/${revue.link}`}
								alt={revue.name}
								width={revue.size.with}
								height={revue.size.height}
							/>
						</td>
						<td>
							<strong>{revue.name}</strong><br />
							{revue.edition}<br />
							<strong>{`${revue.prix}€`}</strong>
						</td>
					</tr>
				))}
			</tbody>
			</table>
	)
}

export default Revues