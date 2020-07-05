import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { TextField } from "./TextField"
import { Counter } from "./Counter"

function App() {
  return (
    <div>
      {/* Textfield will give an error automatically if the required props are not passed */}
      <TextField
        text="Hello"
        person={{ firstName: "Sam", lastName: "Jones" }}
        arr={[3, 4, 5]}
        handleChange={(e) => {
          e.preventDefault()
          //  typing 'e' shows me all the possible methods I can invoke on it
          //  thanks to typescript and setting up the interface the correct way
        }}
      />
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button
              onClick={() => {
                setCount(count + 1)
              }}
            ></button>
          </div>
        )}
      </Counter>
    </div>
  )
}

export default App

// My take on the main benefits of Typescript:
// 1. Catch typing errors instantly
// 2. Intellisense is greatly improved

// It seems that at first it is more time consuming to write compared to normal js,
// but overtime in a big project I believe the time you save with
// the 2 points I mentioned above will greatly outweight the time cost of
// the extra typing of interfaces and types.
