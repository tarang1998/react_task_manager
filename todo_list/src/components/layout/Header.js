import { FaPizzaSlice } from 'react-icons/fa';

export const Header = () => {
    return (
        <header className = 'header'>
            <nav>
                <div className = 'logo'>
                    <img src = "/images/logo.png" alt='TaskManagerLogo' />
                </div>
                <div className = 'settings'>
                    <ul>
                        <li>Somebody</li>
                        <li><FaPizzaSlice/></li>        
                    </ul>
                </div>
            </nav>
        </header>
    );
}  