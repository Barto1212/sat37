import Image from "next/image"

const Abstract = () => (
	<div className="article">
	<h1>Qui sommes nous ?</h1>
		<div className="photo photo--left">
			<Image
				src='/img/recolte.jpg'
				alt="Récolte du miel"
				width={540}
				height={358}
			/>
		</div>
			<p>
				Le Syndicat de l'Apiculture Tourangelle a pour but de promouvoir la production du miel et des produits de la ruche, d'améliorer les 
				connaissances techniques des apiculteurs avec son rucher école, de défendre les intérêts des apiculteurs et de sauvegarder l’environnement. 
				Adhérent(e) au Syndicat de l'Apiculture Tourangelle vous aurez accès à de nombreux services:
			</p>
			<ul>
				<li>Représentation au niveau national à l’UNAF et départemental au GDSA.</li>
				<li>Contrats d’assurance adaptés à l’apiculture professionnelle ou de loisir.</li>
				<li>Adhésion au contrat UNAF - Eco-emballages.</li>
				<li>Informations actualisées grâce aux revues apicoles proposées à l’abonnement.</li>
				<li>Informations actualisées grâce aux revues apicoles</li>
				<li>Remises auprès des magasins professionnels de matériel apicole sur présentation de la carte d’adhérent(e).</li>
				<li>Accès à la miellerie et à l’ensemble de ses équipements sur réservation.</li>
				<li>Prêt de différents matériels contre dépôt d’un chèque de caution: extracteur, bac à désoperculer, chaudière à cire...</li>
				<li>Accès à un fond d’ouvrages spécifiques sur la pratique de l’apiculture.</li>
				<li>Cours théoriques et pratiques au rucher-école.</li>
				<li>Mise à disposition du rucher-relais pour débuter.</li>
				<li>Accès à l’expérience inestimable et sage de nos aînés, à partager sans modération.</li>
			</ul>
		</div>
)

export default Abstract