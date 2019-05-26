import React from 'react'
import Stack from './Stack'

const App = () => (
  <div className="bg-light py-4 h-m100">
    <div className="text-center font-weight-bold py-4 mx-4">
      <h1 className="font-weight-bolder">World Data</h1>
    </div>
    <div className="container-fluid container-sm">
      <Stack />
      <p className="mt-5 text-center text-black-50">
        <small>
          All data is from{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.wikipedia.com"
          >
            Wikipedia
          </a>
          .
        </small>
      </p>
    </div>
  </div>
)

export default App
