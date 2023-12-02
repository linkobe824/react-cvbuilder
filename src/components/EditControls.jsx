import ButtonControl from './ButtonControl'
import ArticleIcon from '@mui/icons-material/Article'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import { useState } from 'react'

function EditControls() {
  const [isActive, setIsActive] = useState(true)

  function handleChangeState() {
    setIsActive(!isActive)
  }

  return (
    <div className='container vertical'>
      <ButtonControl
        state={isActive ? 'active' : ''}
        onChangeState={handleChangeState}
      >
        {' '}
        <ArticleIcon />
        Content
      </ButtonControl>
      <ButtonControl
        state={isActive ? '' : 'active'}
        onChangeState={handleChangeState}
      >
        <DesignServicesIcon />
        Customize
      </ButtonControl>
    </div>
  )
}

export default EditControls
