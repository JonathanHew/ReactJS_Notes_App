
import React from 'react'
import Form from './components/Form'
import Notes from './components/Notes'

const App = () => {
  return (
    <div>
      <Form></Form>
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <h1>Your Notes</h1>
            <Notes></Notes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
