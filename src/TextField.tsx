import React, { useState, useRef } from "react"

// These are your prop types for the component

interface Person {
  firstName: string
  lastName: string
}

// "?" means it is optional

interface Props {
  text: string
  ok?: boolean
  i?: number
  arr?: Array<number>
  fn?: (bob: string) => string
  person: Person
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
  // If no type is specified here typescript will automatically infer it
  // (number in this case)
  const [count, setCount] = useState<number | null>(5)

  const inputRef = useRef<HTMLInputElement>(null)
  const divRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={divRef}>
      {/* Hover over the attribute to see what interface is required */}
      <input ref={inputRef} onChange={handleChange} />
    </div>
  )
}
