import './Header.css';
import logo from '../pictures/logo.png';
import logoO from '../pictures/logo_O.png';
import search from '../pictures/header-search.png';
import avatar from '../pictures/avatar.jpg';
import settings from '../pictures/settings.png'

function Header() {
    return (
        <header className="header flex-space_between-conteiner">
          <div className="logo-conteiner">
            <img src={logo} className="logo" alt="logo"/>
            <img src={logoO} className="logo-O" alt="logo"/>
          </div>
          
          <div className='conteiner-search-avatar-settings flex-space_between-conteiner'>
                <div className='input-conteiner header-input-conteiner'>
                    <input type='text' className='header-input' placeholder='Поиск'/>
                    <img src={search} className="input-img" alt="search"/>
                </div>
                <div className='conteiner-avatar-settings flex-space_between-conteiner'>
                    <img src={avatar} className="avatar-img" alt="avatar"/>
                    <span>Имя Фамилия</span>
                    <div className='conteiner-settings'>
                        <img src={settings} alt="settings"/>
                    </div>
                </div>
                
          </div>
        </header>
    );
  }
  
  export default Header;