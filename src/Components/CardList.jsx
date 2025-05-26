import React from 'react'
import CardComponent from './CardComponent'

const CardList = ({Robots}) => {

  return (
    <>
        <div className="flex flex-wrap justify-center">
            { Robots.length > 0 ? Robots.map(robot => (
                    <CardComponent 
                    key={robot.id}
                    name={robot.name}
                    email={robot.email}
                    id={robot.id}/>
                )) :
                <p>no robots found</p>
            }
        </div>
    </>
  )
}

export default CardList