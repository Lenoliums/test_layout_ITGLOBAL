import './Header.css';
import logo from '../public/logo.png';
import logoO from '../public/logo_O.png';
import search from '../public/header-search.png';
import avatar from '../public/avatar.jpg';
import settings from '../public/settings.png'

function Header() {
    return (
        <header className="header flex-space_between-conteiner">
          <div className="logo-conteiner">
            <img src={logo} className="logo" alt="logo"/>
            <img src={logoO} className="logo-O" alt="logo"/>
          </div>
          
          <div className='conteiner-search-avatar-settings flex-space_between-conteiner'>
                <div className='input-conteiner'>
                    <input type='text' className='header-input' placeholder='Поиск'/>
                    <img src={search} className="input-img" alt="search"/>
                </div>
                <div className='conteiner-avatar-settings flex-space_between-conteiner'>
                    <img src={avatar} className="avatar-img" alt="avatar"/>
                    <span>Имя Фамилия</span>
                    <div className='header-conteiner-settings'>
                        <img src={settings} className="settings-img" alt="settings"/>
                    </div>
                </div>
                
          </div>
        </header>
    );
  }
  
  export default Header;