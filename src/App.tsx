import { useState } from 'react'
import { Container, Area, Header } from './App.styles'
import { Item } from './types/Item'



const App = () =>  {
  const [list, setList] = useState<Item[]>([])


  return (
    <Container>
      <Area>
        <Header>Lista de Tarefa</Header>
      </Area>
    </Container>
  )
}

export default App;
