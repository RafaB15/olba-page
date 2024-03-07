import '../styles/FrontPageHeader.css';
import ortodoncia_lingual from '../images/ortodoncia_lingual.jpg';

const FrontPageHeader = () => {
    return (
        <div className="image-background" style={{backgroundImage: `url(${ortodoncia_lingual})`}}>
            <div className="front-page-header">    
                <h1 className="main-title">
                    Excelencia en Ortodoncia Lingual
                </h1>
                <h2 className="sub-title">
                    La verdadera ortodoncia invisible
                </h2>
            </div>
        </div>
    )
}

export default FrontPageHeader;