import './App.css';
import Content from './component/Content';
import CreateContent from './component/CreateContent';
import Header from './component/Header';
import Navigator from './component/Navigator';
import {useState} from "react";

class subtask{
    constructor(
      title = "Новая запись",
      thema= '',
      status_= '',
      description= '',
      product= '',
      note= '',
      priority= '',
      responsible= [],
      group= [],
      comment= '',
      concordants= [],
      openDate= '',
      createDate= '',
      openPerson= [],
      createPerson= []
    ){
      this.title = title
      this.thema= thema
      this.status_= status_
      this.description= description
      this.product= product
      this.note= note
      this.priority= priority
      this.responsible= responsible
      this.group= group
      this.comment= comment
      this.concordants= concordants
      this.openDate= openDate
      this.createDate= createDate
      this.openPerson= openPerson
      this.createPerson= createPerson

    }
}
const subtaskContent = new subtask(
  'STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller',
  'На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller',
  'Новая',
  '',
  'Platform',
  'Проверить что-то там',
  'Средний',
  ['Константин Константиновский'],
  ['SupportGroup'],
   '',
  ['Имя Фамилия', 'Иимя Фамилия', 'И еще имя фамилия', 'First Name and Last Name', 'Elena Borisova', 'Natalia Konstantinovna', 'First Name and Last Name', 'Elena Borisova', 'Natalia Konstantinovna', 'First Name and Last Name', 'Elena Borisova', 'Natalia Konstantinovna'],
  '',
  new Date(2024, 10, 22)?.toISOString().substring(0,10),
  ['Андрей Пивоваров'],
  ['Андрей Пивоваров'])
const emptySubtask = new subtask()

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let closeModal = ()=>{setIsModalOpen(false)}
  let openModal = ()=>{setIsModalOpen(true)}
  return (
    <div>
      <Header/>
      <div className='flex-conteiner'>
        <Navigator/>
        <Content content={subtaskContent} openModal={openModal}/>
      </div>
      <CreateContent content={emptySubtask} open={isModalOpen} closeModal={closeModal}/>
    </div>
    
  );
}

export default App;
