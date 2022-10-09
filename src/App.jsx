import { useState, useEffect } from 'react'
import { Title, NumberInput, Button, Group } from '@mantine/core';

import CodeHighlight from './Components/codeHighlight';
import Matrix from './Components/matrix';

const App = () => {
  const [matrix, setMatrix] = useState(Array(12*16).fill(0))
  const [showCode, setShowCode] = useState(false);
  const [columns, setColumns] = useState(12)
  const [rows, setRows] = useState(16)

  useEffect(() => {
    setShowCode(false);
    setMatrix(Array(columns * rows).fill(0))
  }, [columns, rows])

  useEffect(() => {
    setShowCode(false);
  }, [matrix])

  return (
    // center everything in the page
    <div className='App flex justify-center items-center flex-col'>
      <Title className='font-medium'>
        Dot Matrix Generator
      </Title>
      <div className='flex flex-row '>
        <NumberInput 
          label="Rows" 
          defaultValue={rows} 
          min={1} 
          max={24} 
          className='p-1'
          onChange={(value) => setRows(value)}  
        />
        <NumberInput 
          label="Columns" 
          defaultValue={columns} 
          min={1} 
          max={24} 
          className='p-1'
          onChange={(value) => setColumns(value)}
        />
      </div>

      <Matrix matrix={matrix} columns={columns} rows={rows} setMatrix={setMatrix}/>
      <Group>
        <Button variant='outline' size="md" onClick={() => setMatrix(Array(columns*rows).fill(0))}>Clear</Button>
        <Button variant='outline' size="md" onClick={() => setShowCode(true)}>Generate</Button>
      </Group>

      {showCode && <CodeHighlight array={matrix} columns={columns}/>}
    </div>
  )
}

export default App
