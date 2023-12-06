import Form from './Form'
import classes from '../../css/FormContainer.module.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useState } from 'react'

function FormContainer({ header, fields, checkCurrent, fieldsContent }) {
  let collapseButton = <KeyboardArrowUpIcon />
  const [isCollapsed, setIsCollapsed] = useState(true)

  function handleClick() {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className='container vertical'>
      <div className={classes['header-container']}>
        <h2>{header}</h2>
        <button
          className={`${classes['collapse-button']} ${
            isCollapsed
              ? classes['collapse-button-arrow-up']
              : classes['collapse-button-arrow-down']
          }`}
          onClick={handleClick}
        >
          {collapseButton}
        </button>
      </div>
      {!isCollapsed ? (
        <Form
          fields={fields}
          checkCurrent={checkCurrent}
          inputsContent={fieldsContent}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default FormContainer
