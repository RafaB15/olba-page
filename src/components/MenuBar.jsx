const MenuBar = ({logo_path}) => {
    return(
        <div className='menu-bar'>
            <img src={logo_path} className="menu-logo"/>
            <ul className='menu-items'>
                <li className="menu-item">Home</li>
                <li className="menu-item">About</li>
                <li className="menu-item">Services</li>
                <li className="menu-item">Contact</li>
            </ul>
        </div>
    )
}

export default MenuBar;