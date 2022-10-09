import { Prism } from '@mantine/prism';

const CodeHighlight = ({array, columns}) => {
  const formatArray = (arr) => {
    let x = 'unsigned matrix[] = {\n';
    arr.forEach((element, index) => {
      if ((index+1) % columns === 1) {
        x+= '\t';
      }
      x += element;
      if (index != arr.length - 1) {
        x += ', ';
      }
      if ((index+1) % columns === 0) {
        x+= '\n';
      }
    });
    x += '};';
    return x;
  }

  return (
    <Prism language="c" className="w-1/2 m-5">
      {formatArray(array)}
    </Prism>
  )
}

export default CodeHighlight;