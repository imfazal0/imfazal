import React from 'react'
import CenterDiv from './components/common/CenterDiv'
import Main from './components/landing/Main'
import Nav from './components/common/Nav'

const App = () => {
  return (
    <div className='w-full h-full '>
      <Nav/>
        <CenterDiv/>
        <Main/>
    </div>
  )
}

export default App