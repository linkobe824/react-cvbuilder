import classes from '../css/CleanAndLoadInputs.module.css'

function CleanAndLoadInputs() {
  return (
    <div className='container'>
      <div className={classes['button-container']}>
        <button className={classes['clear-button']}>Clear Resume</button>
        <button className={classes['load-button']}>Load Example Data</button>
      </div>
    </div>
  )
}

export default CleanAndLoadInputs
