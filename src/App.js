import { useState } from "react";
import './App.css';
import Header from '../src/componentes/Header/Header';
import Sidebar from './componentes/Sidebar/Sidebar';
import Footer from './componentes/Footer/Footer';
import Main from './componentes/Main/Main';

function App() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div>
      <Sidebar/>
      <Header searchInput={searchInput} setSearchInput={setSearchInput}/>
      <Main searchInput={searchInput}/>
      <Footer/>
    </div>
  );
}

export default App;
