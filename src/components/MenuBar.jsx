import Logo from "./Logo";

const MenuBar = () => {
    return(
        <div className='menu-bar'>
            <Logo />
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