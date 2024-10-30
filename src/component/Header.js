import './Header.css';
import logo from '../pictures/logo.png';
import logoO from '../pictures/logo_O.png';
import search from '../pictures/header-search.png';
import avatar from '../pictures/avatar.jpg';
import settings from '../pictures/settings.png'

function Header() {
    return (
        <header className="header flex-space_between-container">
          <div className="logo-container">
            <img src={logo} className="logo" alt="logo"/>
            <img src={logoO} className="logo-O" alt="logo"/>
          </div>
          
          <div className='container-search-avatar-settings flex-space_between-container'>
                <div className='input-container header-input-container'>
                    <input type='text' className='header-input' placeholder='Поиск'/>
                    <img src={search} className="input-img" alt="search"/>
                </div>
                <div className='container-avatar-settings flex-space_between-container'>
                    <img src={avatar} className="avatar-img" alt="avatar"/>
                    <span>Имя Фамилия</span>
                    <div className='container-settings'>
                        <img src={settings} alt="settings"/>
                    </div>
                </div>
                
          </div>
        </header>
    );
  }
  
  export default Header;