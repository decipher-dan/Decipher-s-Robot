import React from 'react'

const Scroll = (props) => {
  return (
    <>
        <div style={{overflowY: 'scroll', borderButtom: '1px solid black', borderTop: '1px solid black', height: '500px'}} className='mb5'>
            {props.children}
        </div>
    </>
  )
}

export default Scroll