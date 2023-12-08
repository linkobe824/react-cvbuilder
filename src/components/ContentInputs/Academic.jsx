import { academicInputFields } from '../../predefined-data/inputFields'
import { academic } from '../../predefined-data/exampleData'
import FormContainer from './FormContainer'
import { useState } from 'react'

function Academic() {
  const [content, setContent] = useState(academic)

  return (
    <FormContainer
      header='Academic'
      fields={academicInputFields}
      fieldsContent={content}
    />
  )
}

export default Academic
