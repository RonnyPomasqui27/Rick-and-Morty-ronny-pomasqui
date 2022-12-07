import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import Character from './Character';

function App() {

  //PERSONAJES
  const [characterInfo, setCharacterInfo] = useState({});

  useEffect(() => {
    const randomCharacter = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomCharacter}`)
      .then(res => setCharacterInfo(res.data))
  }, [])


  // BUSCADOR
  const [text, setText] = useState('');

  // const searchText = (e) => {
  //   saveText();

  //   axios.get(`https://rickandmortyapi.com/api/location/${text}`)
  //   .then(res => setText(res.data))
  // };

  // const saveText = (e) => {
  //   setText(e.target?.value)

  // };

  const search = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${text}`)
      .then(res => setCharacterInfo(res.data))
      setText('')
  }



  return (
    <>
      <div className="App">
        {/* BUSCADOR  */}
        <div className='search-input'>
          <label className='lbl-Name'>
            <span className='Span-title'>Busqueda por ID</span>
          </label>
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
          <div className="boton">
            <a href="#" onClick={search}><i class="fa-solid fa-magnifying-glass"></i></a>
          </div>
        </div>
      </div>
      {/* PRESENTACION */}
      <div className="presentation">
        <div className='info-container'>
          <h2>{characterInfo.name}</h2>
          <div className="presentation-card">
            <p className='text'><b>Type: </b>{characterInfo.type}</p>
            <p className='text'><b>Dimension: </b>{characterInfo.dimension}</p>
            <p className='text'><b>Population: </b>{characterInfo.residents?.length}</p>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="card">
          {
            characterInfo.residents?.map(iterator => (
              <div key={iterator} >
                <Character
                  url={iterator}
                  characterInfo={characterInfo}
                  setCharacterInfo={setCharacterInfo}
                />
              </div>
            ))
          }
        </div>
      </div>
      <div className="footer">
        <div className="footer-container">
          <h3>Developer: </h3>
          <p>ronny27pch@gmail.com</p>
          <div className="separator"></div>
          <span>made with love  ❤ in academlo</span>
        </div>
      </div>
    </>
  )
}

export default App
