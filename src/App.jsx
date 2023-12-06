import './App.css'
import EditControls from './components/EditControls/EditControls'
import ContentInputs from './components/ContentInputs/ContentInputs'
import CleanAndLoadInputs from './components/CleanAndLoadInputs'
import CustomizationOptions from './components/CustomizarionOptions/CustomizationOptions'
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
      <div className='flex-container-vertical'>
        <CleanAndLoadInputs />
        <MainContent />
      </div>
      <div className='preview-container'></div>
    </div>
  )
}

export default App
