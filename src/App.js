import './App.css';
import Content from './component/Content';
import Header from './component/Header';
import Navigator from './component/Navigator';

const subtaskContent = {
  title: 'STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller',
  thema: 'На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller',
  status: 'Новая',
  description: '',
  product: 'Platform',
  note: 'Проверить что-то там',
  priority: 'Средний',
  responsible: ['Константин Константиновский'],
  group: ['SupportGroup'],
  comment: '',
  concordants: ['Имя Фамилия', 'Иимя Фамилия', 'И еще имя фамилия', 'First Name and Last Name', 'Elena Borisova', 'Natalia Konstantinovna', 'First Name and Last Name', 'Elena Borisova', 'Natalia Konstantinovna', 'First Name and Last Name', 'Elena Borisova', 'Natalia Konstantinovna'],
  openDate: '',
  createDate: new Date(2024, 10, 22)?.toISOString().substring(0,10),
  openPerson: ['Андрей Пивоваров'],
  createPerson: ['Андрей Пивоваров']
}

function App() {
  return (
    <div>
      <Header/>
      <Navigator/>
      <Content content={subtaskContent}/>
    </div>
    
  );
}

export default App;
