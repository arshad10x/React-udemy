import React from 'react'

const User = (props) => {
  return (
    <div>
      <h1>My name is {props.name}</h1>
      <h2>I am a {props.position}</h2>
    </div>
  )
}

export default User;