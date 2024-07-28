import Heading from './components/Heading'
import { Section } from './components/Section'
import Counter from './components/Counter'
import List from './components/List'

import { useEffect, useState } from "react"

interface User {
  id: number,
  username: string,
}

function App() {
  const [count, setCount] = useState<number>(1)
  const [ users, setUsers] = useState<User[] | null>(null)

  useEffect(() => {
    console.log('mounting')
    console.log('Users:', users)

    return () => console.log('unmounting')
  }, [users])

  return (
    <>
      <Heading title={"Hello"}/>
      <Section title = {"Different title"}> This is my Section.</Section>
      <Counter setCount = {setCount}> Count is {count}</Counter>
      <List items={["Coffee","Soccer","Code"]} render={(item: string) => <span className= "gold">
        {item}
      </span>} />
    </>
  )
}

export default App