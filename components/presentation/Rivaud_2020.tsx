import Image from "next/image"

const Rivaud_2022 = () => (
  <div className="article">
    <h2>Chateau du Rivaud les 24 et 25 octobre 2020</h2>
    <div className="image__left">
      <Image
        src='/img/Chateau-Rivau.gif'
        alt="Chateau du Rivaud"
        width={1542/3}
        height={884/3}
      />
    </div>
    <p>
      Dans un cadre particulièrement agréable, au pied du château, mais desservie par une météo pour le moins désagréable (pluie), 
      la manifestation s’est soldée par une fréquentation peu nombreuse et donc une faible vente de miel (petite recette).
    </p>
    
  </div>
)

export default Rivaud_2022