import {useState } from 'react'
import './App.css'
import Searcher from './components/Searcher/Searcher'
import {mountainsList} from './components/Mountains/mountains.js'
import MountainsContent from './components/Mountains/MountainsContent.jsx'
 
function App() {

  const [mountains, setMountains] = useState(mountainsList);

  function getFormValue(value) {
    let filteredMountains = mountainsList;
    if(value.trim() !== ''){
      const regex = new RegExp(`^${value}`, 'i');
      filteredMountains = mountainsList.filter(mountain =>
        regex.test(mountain.name)
      );
    }
    setMountains(filteredMountains);
  }


  return (
    <main>
      <header>
        <h1 className='page-title'>WIKI MOUNTAIN</h1>
      </header>
      <section className='searching-section'>
        <Searcher getFormValue={getFormValue}/>
        <MountainsContent mountains={mountains} />
      </section>
    </main>
  )
}

export default App
