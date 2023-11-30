import schoolLogo from '../../assets/school.svg'
import './home.scss'

function Home() {

    return (
        <>
            <h2>Bienvenue à l'école</h2>
            <h1>Ecole</h1>
            <h2>Voici notre école</h2>
            <div>
                <img src={schoolLogo} className="logo react" alt="React logo" width={300}/>
            </div>
            <p>Comme elle est splendiiiiide</p>
            <p>Et t'as pas vu l'autre partie....</p>
            <p>MERVEILLEUX!</p>

            <h4>Super présentation</h4>
            <p>
                L'école maternelle et primaire Sarty est un établissement dédié à l'éducation et au développement des enfants, situé au cœur d'une communauté dynamique. Elle offre un environnement d'apprentissage accueillant et stimulant, avec des infrastructures modernes, une équipe pédagogique hautement qualifiée, et un programme éducatif complet visant à développer les compétences académiques, sociales, émotionnelles et artistiques des élèves. Des activités parascolaires telles que la musique, la danse, les sports et les arts plastiques enrichissent l'expérience des élèves. L'école promeut des valeurs essentielles telles que le respect, la tolérance, la responsabilité et la coopération. La sécurité des élèves est une priorité, et la collaboration entre l'école et les parents est encouragée. L'école Sarty favorise également un fort sentiment d'appartenance à une communauté grâce à des événements sociaux et des célébrations culturelles. En somme, elle vise à créer un environnement éducatif bienveillant où chaque enfant peut s'épanouir et développer son plein potentiel, posant ainsi les bases d'une éducation solide et d'une vie réussie.
            </p>
        </>
    )
}
  
export default Home