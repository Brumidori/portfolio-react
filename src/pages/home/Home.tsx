import "./Home.css";
import LogoPortfolio from '../../assets/LogoPortfolio.svg';

function Home(){
    return(
        <div className="background-home">
            <div className="container-home">
                <div className="logo">
                    <img src={LogoPortfolio} />
                </div>
            </div>
        </div>
    )
}

export default Home;