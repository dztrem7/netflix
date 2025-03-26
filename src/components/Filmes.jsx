import "../components/Filmes.css"
import Img1 from "../assets/1.png"
import Img2 from "../assets/2.png"
import Img3 from "../assets/3.png"
import Img4 from "../assets/4.png"
import Img5 from "../assets/5.png"
import Img6 from "../assets/6.png"
import FilmesCards from "./FilmesCard"
import Play from "../assets/play-button.png"


export default function Filmes() {
    
    const movies = [
        {
            id: 1,
            image: Img1,
            description: "Descriçao 1"
        },
        {
            id: 2,
            image: Img2,
            description: "Descriçao 2"
        },
        {
            id: 3,
            image: Img3,
            description: "Descriçao 3"
        },
        {
            id: 4,
            image: Img4,
            description: "Descriçao 4"
        },
        {
            id: 5,
            image: Img5,
            description: "Descriçao 5"
        },
        {
            id: 6,
            image: Img6,
            description: "Descriçao 6"
        }
    ]

    return (

        <div className="pading">
            <div className="flexao">
                <h4 className="iguais">My list</h4>
                <div>
                    <button className="button"><img className="img-buttons" src={Play} alt="" />Play</button>
                </div>
                <h4 className="iguais">Info</h4>

            </div>
            <h3 className="popular">Popular on Netflix</h3>
            <div className="cards">
                {
                    movies.map(movie => (
                        <FilmesCards key={movie.id} image={movie.image} descricao={movie.description} />
                    ))
                }

            </div>
        </div>
        
    )
}