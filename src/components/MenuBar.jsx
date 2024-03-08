import '../styles/MenuBar.css';
import { useState } from 'react';

const MenuBar = ({logo_path}) => {
    
    const [showMenu, setShowMenu] = useState(false);

    // Function to toggle the menu for mobile
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    // Function to render the horizontal menu
    const renderHorizontalMenu = () => {
        return(
            <ul className='horizontal-menu-items'>
                <li className="menu-item">Home</li>
                <li className="menu-item">About</li>
                <li className="menu-item">Services</li>
                <li className="menu-item">Contact</li>
            </ul>
        )
    }

    // Function to render the vertical menu
    const renderDropdownMenu = () => {
        return(
            <ul className='vertical-menu-items'>
                <li className="menu-item">Home</li>
                <li className="menu-item">About</li>
                <li className="menu-item">Services</li>
                <li className="menu-item">Contact</li>
            </ul>
        )
    }
    
    return(
        <div className="menu-bar">
        {/* Conditionally render based on screen size */}
            <img src={logo_path} className="menu-logo"/>
            {window.innerWidth > 768 ? (
                renderHorizontalMenu()
            ) : (
                <div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    Menu
                </button>
                {showMenu && renderDropdownMenu()}
                </div>
            )}
        </div>
    )
}

export default MenuBar;