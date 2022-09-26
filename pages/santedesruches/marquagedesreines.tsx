import Layout from "@layout"
import style from './marquagedesreines.module.scss'
import Image from "next/image"
const Circle = ({ color }) => {
  return (
    <div className={style.circle}>
      <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
        <g fill={color}>
          <circle cx="5" cy="5" r="5"/>
        </g>
      </svg>
    </div>
  )
}

const couleurs = [
  { couleur: "bleue",   endYear1: 0, endYear2: 5, code: "#0000FF" },
  { couleur: "blanche", endYear1: 1, endYear2: 6, code: "#FFFFFF" },
  { couleur: "jaune",   endYear1: 2, endYear2: 7, code: "#FFCE30" },
  { couleur: "rouge",   endYear1: 3, endYear2: 8, code: "#FF0000" },
  { couleur: "verte",   endYear1: 4, endYear2: 9, code: "#008000" },
]
export default function Adhesion () {
	return (
		<Layout>
      <div className={style.marquageReine}>
        <h1>Année de marquage des reines</h1>
        <h2>La couleur du marquage dépend par convention de leur année de naissance :</h2>
        <div className="photo photo--left">
          <Image 
            src="/img/Reine.jpg"
            alt="Reine abeille"
            width={1684*0.3}
            height={2224*0.3}
          />
        </div>
        <ul>
          {couleurs.map(queen => {
            return (
              <li key={queen.endYear1}>
                <div className={style.stack}>
                  <Circle color={queen.code} />
                  {/* <div className={style.text}> */}
                  <p>
                    {`Année finissant par ${queen.endYear1} ou ${queen.endYear2} : ${queen.couleur}`}
                  </p>
                  {/* </div> */}
                </div>
            </li>
            )
          })}
        </ul>
      </div>
		</Layout>
	)
}