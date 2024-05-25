import Toolbar  from './components/Toolbar/Toolbar'
import { useState } from 'react'
import Card  from './components/Card/Card.jsx'
import './App.css'
import  { Data }  from './components/Data/Data'


function App() {
  const [item, setItems] = useState(Data)
 
  const toolbarItems = [...new Set(Data.map((val) => val.category))]
 
  const fiterItems = (cat) => {
    const newItems = Data.filter((newval) => newval.category === cat)
 
    setItems(newItems)
  }

  return (
    <div className='container'>
      <div className='row'>
        <Toolbar
          toolbarItems={toolbarItems}
          setItems={setItems}
          fiterItems={fiterItems}
          />
        <Card
          item={item}
        />

      </div>
    </div>
  )
}

export default App
