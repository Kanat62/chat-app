import React from 'react'
import cl from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={cl.wrapperLoader}>
        <span className={cl.loader}></span>
    </div>
  )
}

export default Loader