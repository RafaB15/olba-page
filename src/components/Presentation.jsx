import '../styles/ImageWithText.css';

const Presentation = () => {
    return (
        <div className="two-column-container">
          <div className="image-column">
            <img src={'/src/images/doctores.png'} alt="Image" className="image" />
          </div>
          <div className="text-column">
            <div className='title'>
                <h1>¿Quiénes somos?</h1>
            </div>
            <div className='description'>
                <p>
                    Somos un grupo de prefecionales de la ortodoncia especializados en ortodoncia lingual. <br/>
                    Super cracks.<br/>
                    Muy capos <br/>
                </p>
            </div>
          </div>
        </div>
    );
}
  
export default Presentation;