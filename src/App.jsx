import './App.css'
import EditControls from './components/EditControls'
import ContentInputs from './components/ContentInputs'
import CleanAndLoadInputs from './components/CleanAndLoadInputs'
import CustomizationOptions from './components/CustomizationOptions'
import { useState } from 'react'

function App() {
  const [editControls, setEditControls] = useState('content')

  // edit control buttons behaviour
  let MainContent =
    editControls === 'content' ? ContentInputs : CustomizationOptions

  function handleChangeControls(selectedButton) {
    setEditControls(selectedButton)
  }

  return (
    <div className='grid-container'>
      <EditControls
        onChangeControls={handleChangeControls}
        controlState={editControls}
      />
      <div>
        <CleanAndLoadInputs />
        <MainContent />
      </div>
      <div className='preview-container'></div>
    </div>
  )
}

export default App
