import React from 'react'
import styles from './AddTodo.module.css'

const AddTodo = () => {
    return (
        <div className='container'>
            <div className="row kg-row">
                <div className="col-6">
                    <input className={styles.addInput} type="text" placeholder='Enter todo here' />
                </div>
                <div className="col-4">
                    <input className={styles.addInput} type="date" />
                </div>
                <div className="col-2">
                    <button type="button" className="btn kg-button btn-success">Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo