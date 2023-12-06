import { academicInputFields } from '../../predefined-data/inputFields'
import Form from './Form'
import FormContainer from './FormContainer'
import { useState } from 'react'

function Academic() {
  const [isFinished, setIsFinished] = useState(true)

  return (
    <div className='container vertical'>
      <h2>Academic</h2>
      <Form
        checkCurrent={isFinished}
        fields={academicInputFields}
      />
    </div>
  )
}

export default Academic
