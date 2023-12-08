import Form from './Form'
import Display from './Display'
import AddButton from './AddButton'
import classes from '../../css/FormContainer.module.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useState } from 'react'

function FormContainer({ header, fields, checkCurrent, fieldsContent }) {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [addButtonClicked, setAddButtonClicked] = useState(false)
  const [displayClicked, setDisplayClicked] = useState(null)

  function handleClick() {
    setIsCollapsed(!isCollapsed)
  }

  function handleShowForm() {
    setAddButtonClicked(true)
  }

  function handleShowFormWithContent(displayNum) {
    console.log(fieldsContent[displayNum])
    setDisplayClicked(displayNum)
  }

  function checkIsCollapsedAndFieldsContent() {
    if (!isCollapsed) {
      return (
        <>
          {fieldsContent.length > 0
            ? fieldsContent.map((val, idx) => (
                <Display
                  key={idx}
                  title={val.school}
                  onShowFormWithContent={() => handleShowFormWithContent(idx)}
                />
              ))
            : ''}
          <AddButton onShowForm={handleShowForm} />
        </>
      )
    }
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
          <KeyboardArrowUpIcon />
        </button>
      </div>
      {displayClicked !== null ? (
        <Form
          fields={fields}
          inputsContent={fieldsContent[displayClicked]}
        />
      ) : addButtonClicked ? (
        <Form fields={fields} />
      ) : (
        checkIsCollapsedAndFieldsContent()
      )}
    </div>
  )
}

export default FormContainer

// {!isCollapsed ? (
//   <Form
//     fields={fields}
//     checkCurrent={checkCurrent}
//     inputsContent={fieldsContent}
//   />
// ) : (
//   ''
// )}
