import InputField from './InputField'
import { personalInputFields } from '../../predefined-data/inputFields'

function Personal() {
  return (
    <div className='container vertical'>
      <h2>Personal Details</h2>
      {personalInputFields.map((val, idx) => (
        <InputField
          key={idx}
          {...val}
        />
      ))}
    </div>
  )
}

export default Personal
