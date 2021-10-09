import Header from './Header/Header';
import Character from './Character/Character';

import './App.scss';

function App() {
  return (
    <div className="app">
      <section className="app__header-section">
        <Header text="BREAKING BAD"/>
      </section>
      <section className="app__card-section">
        <div className="app__card-container">
          <Character name="Walter White"/>
          <Character name="Walter White"/>
          <Character name="Walter White"/>
          <Character name="Walter White"/>
          <Character name="Walter White"/>
          <Character name="Walter White"/>
          <Character name="Walter White"/>
          <Character name="Walter White"/>
        </div>
      </section>
    </div>
  );
}

export default App;
