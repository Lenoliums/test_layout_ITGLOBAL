import "./Content.css";
import { useRef, useEffect, useState, useId} from "react";
import search from '../pictures/contentSearch.png';
import cross from '../pictures/micro-cross.png';

const productSet = ['Platform', 'Application', 'Smt very very strange']
const personTags = ['worker1', 'worker2', 'worker3', 'worker4', 'worker5', 'worker6']
document.addEventListener('scroll', ()=>headerAnimation())
function headerAnimation(){
    const header = document.getElementsByClassName('subHeader')[0];
    if(header.offsetTop>52){
        header.classList.add("subHeader-shadow")
    }
    else{
        header.classList.remove("subHeader-shadow")
    }
}

function ContentInput(prop) {
    const [value, setValue] = useState(prop.value);
    useEffect(()=>{prop.onChange(value)},[value])
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenAdd, setIsOpenAdd] = useState(false);
    const [addInputValue, setAddInputValue] = useState('');
    let close = ()=>{setIsOpen(false)}
    let closeAdd = ()=>{setIsOpenAdd(false)}
    const choiceButtonRef = useRef()
    const addButtonRef = useRef()

    if(prop.type === "date"){
        return(
        <div className={prop.class}>
                <h5 className="content-input-title">
                    {prop.required && <span style={{ color: "red" }}>*</span>}{" "}
                    {prop.title}
                </h5>
                <div className="input-buttons-container">
                    <div className="input-container">
                        <input
                            onChange={(e) => setValue(e.target.value)}
                            type="text"
                            className="content-input"
                            value={value && value.split('-')[2]+'.'+value.split('-')[1]+'.'+value.split('-')[0]}
                        />
                    </div>
                    <div className="container-settings">
                        <input
                            onChange={(e) => setValue(e.target.value)}
                            type="date"
                            value={value}
                        />
                    </div>
                </div>
                
            </div>
            )
    }
    if (prop.type === "text") {
        return (
            <div className={prop.class}>
                <h5 className="content-input-title">
                    {prop.required && <span style={{ color: "red" }}>*</span>}{" "}
                    {prop.title}
                </h5>
                <div className="input-buttons-container">
                    <div className="input-container">
                        <input
                            placeholder=''
                            onChange={(e) => setValue(e.target.value)}
                            type={prop.type}
                            className="content-input"
                            value={value}
                        />
                    </div>
                    {prop.selectionSet && 
                    <>
                        <div className="container-settings" onClick={()=>{setIsOpen(true)}}  ref={choiceButtonRef}>
                            <img src={search} alt="search"/>
                        </div>
                        <DropDown open={isOpen} elRef={choiceButtonRef} close={close}>
                        <>
                            {prop.selectionSet.map((el)=>
                                <div className="tag-item" onClick={()=>{setValue(el); close()}}>
                                <span className="tag-text">{el}</span>
                                </div>
                            )}
                        </>
                        </DropDown>
                    </>
                    }

                    
                </div>
            </div>
        );
    }
    function removeTag(index){
        setValue(value.filter((el, i) => i !== index))
    }
    function addTag(val){
        if(!value.includes(val)){
            setValue([...value, val])
        }  
    }
    function addFunction(event){
        if(event.code === 'Enter'){
            setAddInputValue('')
            setValue([...value, addInputValue])

        }
        
    }
    if (prop.type === "tags") {
        return (
            <div className={prop.class}>
                <h5 className="content-input-title">
                    {prop.required && <span style={{ color: "red" }}>*</span>}{" "}
                    {prop.title}
                </h5>
                <div className="input-buttons-container">
                    <div className="input-container tags-container">
                        <img src={cross} className="micro-cross" alt="cross" onClick={()=>setValue([])}/>
                        { value.map((tag, index) => (
                            <div className="tag-item" key={index}>
                                <span className="tag-text">{tag}</span>
                                {
                                    value.length>1 && <span className="tag-close" onClick={() => removeTag(index)}>&times;</span>
                                }
                            </div>
                        )) }
                    </div>
                    <div className="container-settings" onClick={()=>{setIsOpenAdd(true)}}  ref={addButtonRef}>
                        <div className="plus">+</div>
                    </div>
                    <DropDown open={isOpenAdd} elRef={addButtonRef} close={closeAdd}>
                        <>
                            <input 
                            placeholder="text..." 
                            type="text" 
                            className="content-input" 
                            onKeyDown={addFunction} 
                            value={addInputValue} 
                            onChange={(e)=>setAddInputValue(e.target.value)}/>
                        </>
                    </DropDown>
                    <div className="container-settings" onClick={()=>{setIsOpen(true)}}  ref={choiceButtonRef}>
                        <img src={search} alt="search"/>
                    </div>
                    <DropDown open={isOpen} elRef={choiceButtonRef} close={close}>
                        <>
                            {prop.selectionSet?.map((el)=>
                                <div className="tag-item" onClick={()=>addTag(el)}>
                                <span className="tag-text">{el}</span>
                                </div>
                            )}
                        </>
                    </DropDown>
                </div>
            </div>
        );
    }
}
function DropDown(prop){
    const id = useId()
    useEffect(()=>{
        !prop.open && document.removeEventListener('mousedown', handleMouseDown);
    }, [prop.open])

    document.addEventListener('mousedown', handleMouseDown);
    function handleMouseDown(e){
        let container = document.getElementById(id);
        if (container && !container.contains(e.target)) {
            prop.close()
        }
    }
    // console.log(prop.elRef.current?.offsetTop, prop.elRef.current?.offsetHeight, window.screen.availHeight, '150', prop.elRef.current?.offsetTop+prop.elRef.current?.offsetHeight+150>window.screen.availHeight)
    return(
        prop.open && <div className="dropDown-container" 
        id={id}
        style={{
            top:`${prop.elRef.current?.offsetTop + prop.elRef.current?.offsetHeight}px`,
            right: `${window.innerWidth - prop.elRef.current?.offsetLeft - prop.elRef.current?.offsetWidth}px`
        }}>
            {prop.children}
        </div>

    )
}

function Content(prop) {
    const [isOpen, setIsOpen] = useState(false);
    const [content, seContent] = useState(prop.content);
    const handleChange = (valueField)=>{ return (value) => {
        seContent({...content, [valueField]: value})
      }
    }
    let close = ()=>{setIsOpen(false)}
    const buttonRef = useRef()
    const buttons = [<button onClick={prop.openModal}>Создать</button>, <button className="save-button">Сохранить</button>, prop.isModal ? <button onClick={prop.closeModal}>Отменить</button> : <button>Сохранить и выйти</button>]
    return (
        <div className="content-container">
            <div className="subHeader">
                <div className="button_conteiner">
                    <h4 className="subtask-title">Подзадача</h4>
                    {!prop.isModal && buttons[0]}
                </div>
                <div className="button_conteiner">
                    {buttons[1]}
                    {buttons[2]}
                </div>
                <div className="container-settings cebab-button" onClick={()=>{setIsOpen(true)}}  ref={buttonRef}>
                        <div className="cebab-button-text">...</div>
                </div>
                
                <DropDown open={isOpen} elRef={buttonRef} close={close}>
                    <>
                        {buttons.map((el)=><>{el}</>)}
                    </>
                </DropDown>
            </div>
            <div className="padding-form">
                <h1 className="content-title">{content.title}</h1>
                <div className="content-form-container">
                    <ContentInput
                        class="item1"
                        value={content.thema}
                        type="text"
                        required={true}
                        title="Тема"
                        onChange={handleChange('thema')}
                    />
                    <ContentInput
                        class="item2"
                        value={content.status_}
                        type="text"
                        required={false}
                        title="Статус"
                        onChange={handleChange('status_')}
                    />
                    <ContentInput
                        class="item3"
                        value={content.description}
                        type="text"
                        required={false}
                        title="Описание"
                        onChange={handleChange('description')}
                    />
                    <ContentInput
                        class="item4"
                        value={content.product}
                        type="text"
                        required={false}
                        title="Продукт"
                        selectionSet = {productSet}
                        onChange={handleChange('product')}
                    />
                    <ContentInput
                        class="item5"
                        value={content.note}
                        type="text"
                        required={true}
                        title="Рабочие заметки"
                        onChange={handleChange('note')}
                    />
                    <ContentInput
                        class="item6"
                        value={content.priority}
                        type="text"
                        required={false}
                        title="Приоритет"
                        onChange={handleChange('priority')}
                    />
                    <ContentInput
                        class="item7"
                        value={content.responsible}
                        type="tags"
                        selectionSet = {personTags}
                        required={false}
                        title="Ответственный"
                        onChange={handleChange('responsible')}
                    />
                    <ContentInput
                        class="item8"
                        value={content.group}
                        type="tags"
                        selectionSet = {personTags}
                        required={false}
                        title="Группа"
                        onChange={handleChange('group')}
                    />
                    <ContentInput
                        class="item9"
                        value={content.comment}
                        type="text"
                        required={false}
                        title="Комментарий"
                        onChange={handleChange('comment')}
                    />
                    <ContentInput
                        class="item10"
                        value={content.concordants}
                        type="tags"
                        selectionSet = {personTags}
                        required={false}
                        title="Согласующие"
                        onChange={handleChange('concordants')}
                    />
                    <ContentInput
                        class="item11"
                        value={content.openDate}
                        type="date"
                        required={false}
                        title="Когда открыто"
                        onChange={handleChange('openDate')}
                    />
                    <ContentInput
                        class="item12"
                        value={content.createDate}
                        type="date"
                        required={false}
                        title="Когда создано"
                        onChange={handleChange('createDate')}
                    />
                    <ContentInput
                        class="item13"
                        value={content.openPerson}
                        type="tags"
                        selectionSet = {personTags}
                        required={false}
                        title="Кем открыто"
                        onChange={handleChange('openPerson')}
                    />
                    <ContentInput
                        class="item14"
                        value={content.createPerson}
                        type="tags"
                        selectionSet = {personTags}
                        required={false}
                        title="Кем создано"
                        onChange={handleChange('createPerson')}
                    />
                </div>
            </div>
        </div>
    );
}

export default Content;
