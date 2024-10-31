import './Navigator.css';
import {useState, useEffect} from "react";
import navPanelClose from '../pictures/navPanelClose.svg';
import navPanelOpen from '../pictures/navPanelOpen.svg';
import star from '../pictures/star.svg';
import keepOn from '../pictures/keep_20dp_5F6368_FILL0_wght400_GRAD0_opsz20.png';
import keepOf from '../pictures/keep_off_20dp_5F6368_FILL0_wght400_GRAD0_opsz20.png';
const treePanelCont=['Моя работа', 'Структура портала','Личное расписание','Отсутствие на рабочем месте','Портфель услуг','Дашборды','Доски задач']

function Navigator() {
  const [isOpen, setIsOpen] = useState(false);
    return (
      <div className='navigator-conteiner'>
        <div className='navigaror-panel-conteiner'>
          <div className='navigaror-panel'>
            <img className="navPanelOpen navigaror-panel-icon" onClick={()=>setIsOpen(true)}  src={isOpen?navPanelOpen:navPanelClose} alt="open nav-tree"/>
            <img className="navigaror-panel-icon" src={star} alt="star"/>
          </div>
          {isOpen && <div className={'tree-panel static-pose'}>
           <div className='nav-header'>
            <input placeholder='Поиск по меню' className='input-container'/>
            <div className='container-settings'>
              <img className="tree-panel-pin" onClick={()=>{setIsOpen(false)}}  src={keepOf} alt="open nav-tree"/>
            </div>
           </div>
           <div className='nav-content'>
              {
                treePanelCont.map((el)=>
                  <div className='tree-panel-cont-conteiner'>
                    <div className='arrow'></div>
                    <span>{el}</span>
                  </div>
                )
              }
           </div>
          </div>}

        </div>

      </div>
    );
  }
  
  export default Navigator;