import Part from './Part/Part';

function Content({ parts }) {
  let sum = parts.reduce((acc, curr) => acc + curr.exercises, 0)
	
	return (
    <>
			{parts.map((part, index) => (
				<Part key={index} part={part}/>
			))}
    <p style={{ fontWeight: 'bold' }}>total of {sum} exercises</p>
    </>
	
	);
}

export default Content;
