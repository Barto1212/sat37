import ExportedImage from "next-image-export-optimizer";
const Razines_2022 = () => (
  <div className="article">
    <h2>Comice du monde rural de Richelais Razines le 2 juin 2022</h2>
    <div className="photo photo--right">
      <ExportedImage
        src="/img/razines-2022-photo.jpg"
        alt="Stand sat37 Razines"
        width={4640 * 0.1}
        height={3772 * 0.1}
      />
    </div>
    <p>
      La participation de l’APICULTURE TOURANGELLE au comice de RAZINES avait
      pour but de faire connaître l’abeille, au travers d'une ruche vitrée, et
      de faire déguster le miel à environ 350 élèves des écoles primaires.{' '}
      <br />
      Notre présence lors de tels événements n’est possible que grâce au
      dévouement et à la disponibilité de nos adhérents bénévoles; Ont participé
      à cette journée découverte, Annick Corbeels, Roland Arnault, Roland
      Zimmermann et Michel Biasoto.
    </p>
    <h3>Quelques informations relatives à RAZINES:</h3>
    <p>
      Le village (234 habitants en 2018) se trouve à environ 10 km dans le
      Sud-Est de Richelieu (Indre-et- Loire) ; Razines est bordé par le petit
      cours de la Veude.
    </p>
    <p>
      <strong>Toponymie:</strong> Attestée sous les formes Ecclesia Razinae en
      1062, puis Razina en 1085. Ce nom est issu du mot gaulois ratis, pour
      indiquer la "fougère", avec un suffixe diminutif -ina qu'il faut
      interpréter non pas comme une "petite fougère" mais un "petit lieu où
      pousse la fougère". Une très ancienne tradition veut qu'à la veille de la
      bataille de Poitiers, en 732, les Sarrasins soient venus camper à Razines
      avec leurs chevaux, attirés par l'abondance et la pureté des eaux vives
      qui y jaillissaient un peu partout. Ils auraient baptisé l'endroit « Ras
      el-Aïn », le « pays des sources », qui nous aurait donné « Razines »
      (source: wikipédia).
    </p>
  </div>
)

export default Razines_2022
