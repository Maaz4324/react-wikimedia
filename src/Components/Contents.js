import React from 'react'
import '../style/Contents.css'

function Contents(props) {
  return (
    <div className='content-container'>
        <h2>{props.head}</h2>
        <h4>{props.head1}</h4><hr />
        <p>{props.para1}</p>
        <p>{props.para2}</p>
        <p>{props.para3}</p>
    </div>
  )
}

export default Contents