import React, { useState } from 'react'
import { StringContext } from '../../provider/StringContext'
import { MiddleBlock } from '../blocks/MiddleBlock'
import { Input } from '../UI/Input/Input'

const Home: React.FC = () => {
  const [str, setStr] = useState<string>('')

  return (
    <div>
      <h1>On this page I try show some technologies</h1>
      <div className="provider-1">
        <span>For example: in this case I use react context</span><br />
        <span>yellow block is parent component. Write some text</span>
        <Input name="example" label="Example:" value={str} onChange={e => setStr(e.target.value)} />
        <StringContext.Provider value={str}>
          <MiddleBlock />
        </StringContext.Provider>
      </div>
    </div>
  )
}

export default Home
