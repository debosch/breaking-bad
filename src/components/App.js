import Header from './Header/Header';
import SearchBar from './Searchbar/Searchbar';
import Character from './Character/Character';
import Modal from './Modal/Modal';
import { useState } from 'react';

import './App.scss';

const App = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="app">
      <section className="app__header-section">
        <Header text="BREAKING BAD"/>
      </section>
      <section className="app__card-section">
        <div className="app__searchbar">
          <SearchBar />
        </div>
        <div className="app__card-container">
          <Character name="Walter White" onClick={ () => setModalActive(true) }/>
        </div>
      </section>
      <Modal active={ modalActive } setActive={ setModalActive }/>
    </div>
  );
}

export default App;
