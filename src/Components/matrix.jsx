import useKeyDown from "../hooks/useKeyDown";
import { Text } from '@mantine/core';

const Matrix = ({ matrix, setMatrix, columns }) => {
  const eraseToggle = useKeyDown('Shift');

  const setMatrixFunc = (index, erase) => {
    const newMatrix = [...matrix];
    newMatrix[index] = erase ? 0 : 1;
    setMatrix(newMatrix);
  }

  return (
    <div className='p-3'>
      <div className='w-fit grid' style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
        {matrix.map((dot, index) => (
          <div
            key={index}
            className={`w-7 h-7 border-black border border-solid m-0 inline-block bg-black ${dot ? 'bg-black' : 'bg-white'}`}
            onMouseDown={() => {
              setMatrixFunc(index, eraseToggle);
            }}
            onMouseEnter={(e) => {
              if (e.buttons === 1) {
                setMatrixFunc(index, eraseToggle);
              }
            }}
          />
        ))}
      </div> 
      <Text size='xs' color='gray'>
        Shift + Click to erase
        </Text>
    </div>
  )
}

export default Matrix;