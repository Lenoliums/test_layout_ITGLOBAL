import "./Content.css";
import { useState} from "react";
import search from '../pictures/contentSearch.png';
import cross from '../pictures/micro-cross.png';

const productSet = ['Platform', 'Application', 'Smt very very strange']
const personTags = ['worker1', 'worker2', 'worker3', 'worker4', 'worker5', 'worker6']
// function isProductValid(value){
//     return productSet.find(value)?true:false
// }

function ContentInput(prop) {
    const [value, setValue] = useState(prop.value);
    if(prop.type === "date"){
        return(
        <div className={prop.class}>
                <h5 className="content-input-title">
                    {prop.required && <span style={{ color: "red" }}>*</span>}{" "}
                    {prop.title}
                </h5>
                <div className="input-buttons-conteiner">
                    <div className="input-conteiner">
                        <input
                            onChange={(e) => setValue(e.target.value)}
                            type="text"
                            className="content-input"
                            value={value.replaceAll('-','.')}
                        />
                    </div>
                    <div className="conteiner-settings">
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
                <div className="input-buttons-conteiner">
                    <div className="input-conteiner">
                        <input
                            placeholder=''
                            onChange={(e) => setValue(e.target.value)}
                            type={prop.type}
                            className="content-input"
                            value={value}
                        />
                    </div>
                    {prop.selectionSet && 
                    <div className="conteiner-settings">
                        <img src={search} alt="search"/>
                    </div>
                    
                    }
                    
                </div>
            </div>
        );
    }
    function removeTag(index){
        setValue(value.filter((el, i) => i !== index))
    }
    if (prop.type === "tags") {
        return (
            <div className={prop.class}>
                <h5 className="content-input-title">
                    {prop.required && <span style={{ color: "red" }}>*</span>}{" "}
                    {prop.title}
                </h5>
                <div className="input-buttons-conteiner">
                    <div className="input-conteiner tags-conteiner">
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
                    <div className="conteiner-settings">
                        <div className="plus">+</div>
                    </div>
                    <div className="conteiner-settings">
                        <img src={search} alt="search"/>
                    </div>
                </div>
            </div>
        );
    }
}
function Content(prop) {
    return (
        <div className="padding-form">
            <h1 className="content-title">{prop.content.title}</h1>
            <div className="content-form-container">
                <ContentInput
                    class="item1"
                    value={prop.content.thema}
                    type="text"
                    required={true}
                    title="Тема"
                />
                <ContentInput
                    class="item2"
                    value={prop.content.status}
                    type="text"
                    required={false}
                    title="Статус"
                />
                <ContentInput
                    class="item3"
                    value={prop.content.description}
                    type="text"
                    required={false}
                    title="Описание"
                />
                <ContentInput
                    class="item4"
                    value={prop.content.product}
                    type="text"
                    required={false}
                    title="Продукт"
                    selectionSet = {productSet}
                />
                <ContentInput
                    class="item5"
                    value={prop.content.note}
                    type="text"
                    required={true}
                    title="Рабочие Заметки"
                />
                <ContentInput
                    class="item6"
                    value={prop.content.priority}
                    type="text"
                    required={false}
                    title="Приоритет"
                />
                <ContentInput
                    class="item7"
                    value={prop.content.responsible}
                    type="tags"
                    required={false}
                    title="Ответственный"
                />
                <ContentInput
                    class="item8"
                    value={prop.content.group}
                    type="tags"
                    required={false}
                    title="Группа"
                />
                <ContentInput
                    class="item9"
                    value={prop.content.comment}
                    type="text"
                    required={false}
                    title="Комментарий"
                />
                <ContentInput
                    class="item10"
                    value={prop.content.concordants}
                    type="tags"
                    required={false}
                    title="Согласующие"
                />
                <ContentInput
                    class="item11"
                    value={prop.content.openDate}
                    type="date"
                    required={false}
                    title="Когда открыто"
                />
                <ContentInput
                    class="item12"
                    value={prop.content.createDate}
                    type="date"
                    required={false}
                    title="Когда создано"
                />
                <ContentInput
                    class="item13"
                    value={prop.content.openPerson}
                    type="tags"
                    required={false}
                    title="Кем открыто"
                />
                <ContentInput
                    class="item14"
                    value={prop.content.createPerson}
                    type="tags"
                    required={false}
                    title="Кем создано"
                />
            </div>
        </div>
    );
}

export default Content;
