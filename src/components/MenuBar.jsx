const MenuBar = ({logo_path}) => {
    return(
        <div className='menu-bar'>
            <img src={logo_path} alt="menu-logo" />
            <ul className='menu-items'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default MenuBar;