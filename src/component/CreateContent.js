import "./CreateContent.css";
import Content from './Content';
import { useEffect } from "react";


function CreateContent(prop) {
    function handleKeyDown(e) {
        let container = document.getElementsByClassName('modal-window')[0];
        if (container && e.code === 'Escape') {
            prop.closeModal()
        }
    }
    function handleMouseDown(e){
        let container = document.getElementsByClassName('modal-window')[0];
        if (container && !container.contains(e.target)) {
            prop.closeModal()
        }
    }
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown)
    useEffect(()=>{
        if(!prop.open){
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('keydown', handleKeyDown);
        }
        
    }, [prop.open])
    return (
        prop.open && <div 
        className="modal-window-conteiner">
            <div className="modal-window">
                <Content content={prop.content} isModal={true}  closeModal={prop.closeModal}/>
            </div>
        </div>

    );
  }
  
  export default CreateContent;