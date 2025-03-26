import "../components/Header.css"
import Home from "../assets/netflix-home.png"

export default function Header() {
    return (
        <header>
            <div className="header">
                <div className="img-div">
                    <img className="home-img" src={Home} alt="" />
                </div>
                <h3 className="destaque">Home</h3>
                <h3 className="cinza">Tv shows</h3>
                <h3 className="cinza">Movies</h3>
                <h3 className="cinza">New & Popular</h3>
                <h3 className="cinza">My list</h3>
                <h3 className="cinza">Browse by languages</h3>
                
            </div>
            
            <div className="tres">
                <h3 className="cinza2">Tv shows</h3>
                <h3 className="cinza2">Movies</h3>
                <h3 className="cinza2">New & Popular</h3>
            </div>
        </header>
    )
}