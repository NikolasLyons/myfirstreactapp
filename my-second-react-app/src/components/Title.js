import React from "react";



export default function Title(props) {
  return(
    <>
      <h1 className="title">{props.title}</h1>
      <br />
      <h2 className="subtitle"> All the latest events in Mario's Kingdom</h2>
    </>
  )
}