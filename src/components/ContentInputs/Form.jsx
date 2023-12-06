import InputField from './InputField'
import classes from '../../css/Forms.module.css'

function Form({ checkCurrent, fields, inputsContent }) {
  return (
    <form className={classes.container}>
      <label
        htmlFor='checkbox'
        className={classes.checkbox}
      >
        Finished?{' '}
        <input
          type='checkbox'
          name='checkbox'
          checked={checkCurrent ? true : false}
        />
      </label>
      {fields.map((val, idx) => {
        const objParameter = val.name
        return (
          <InputField
            value={inputsContent ? inputsContent[0][objParameter] : ''}
            key={idx}
            {...val}
            disabled={!checkCurrent && val.name === 'endDate' ? true : false}
          />
        )
      })}
      <div className={classes['buttons-container']}>
        <button className={`${classes.btn} ${classes.delete}`}>Delete</button>
        <div className={classes['buttons-pair']}>
          <button className={`${classes.btn} ${classes.cancel}`}>Cancel</button>
          <button className={`${classes.btn} ${classes.save}`}>Save</button>
        </div>
      </div>
    </form>
  )
}

export default Form
