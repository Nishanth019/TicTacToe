import React from 'react'

const Square = (props) =>{
  const clas = props.className ? `${props.className} square` : 'square';
  return (
   <div onClick={props.onClick} className={clas}>
    <h1  style={{ fontSize: "2.8rem",fontWeight: "bolder"}}>{props.value}</h1>
   </div>
  )
}
export default Square;