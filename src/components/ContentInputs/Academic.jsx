import { academicInputFields } from '../../predefined-data/inputFields'
import { academic } from '../../predefined-data/exampleData'
import FormContainer from './FormContainer'
import { useState } from 'react'

function Academic() {
  const [isFinished, setIsFinished] = useState(true)
  const [content, setContent] = useState(academic)

  return (
    <FormContainer
      header='Academic'
      checkCurrent={isFinished}
      fields={academicInputFields}
      fieldsContent={content}
    />
  )
}

export default Academic
