import React from 'react'

const CardComponent = (props) => {
  return (
    <>
        <div className='br3 bg-dark-green mw5 center br pa1 pa4-ns mv3 ba b--black-10 grow'>
          <div className="tc">
            <img src={`https://robohash.org/${props.id}?size=200x200`} className="br-100 h3 w3 dib" alt="photos" />
            <h3 className='f4'>{props.name}</h3>
            <hr className="mw3 bb bw1 b--black-10"></hr>
          </div>
            <p className="lh-copy measure center f6 black-70">{props.email}</p>
        </div>
    </>
  )
}

export default CardComponent