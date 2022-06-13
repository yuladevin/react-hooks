import React from 'react'
import {useAlert} from './alert/AlertContext'

export default function Main() {
  const {show} = useAlert()
  return (
    <>
      <h1>Hello, here is an example of Context</h1>
      <button onClick={() => show('this text from Main.js')} className="btn btn-success">Show alert</button>
    </>
  )
}
