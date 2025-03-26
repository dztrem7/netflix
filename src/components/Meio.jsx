import "../components/Meio.css"
import N from "../assets/n-meio.png"
import Series from "../assets/series.png"
import Devi from "../assets/devi.png"
import Top from "../assets/top-10.png"
import Play from "../assets/play-button.png"
import Atencao from "../assets/atençao-button2.png"

export default function Meio() {
    return (
        <div className="todos">
            <div className="imagens">
                <img className="n" src={N} alt="" />
                <img className="series" src={Series} alt="" />
            </div>
            <div className="div-devi">
                <img className="devi" src={Devi} alt="" />
            </div>
            <h2 className="tv">TV Mysteries • Based on Books</h2>
            <div className="metade">
                <h3 className="deded neymar"><img className="top" src={Top} alt="" />#1 in TV Shows Today</h3>
                <p className="description">Determined to protect a young patient who escaped a mysterious
                    cult, a psychiatrist takes the girl in, putting her own family — and
                    life — in danger.</p>
                <div className="flex-button">

                    <button className="button-1"><img className="img-buttons" src={Play} alt="" />Play</button>
                    <button className="button-2"><img className="img-buttons" src={Atencao} alt="" />More Info</button>
                </div>
            </div>
        </div>
    )
}