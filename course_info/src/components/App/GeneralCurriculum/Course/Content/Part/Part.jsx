function Part({ part, index }) {
  console.log(part.name, part.exercises)
	return <p key={index}>{part.name + ' ' + part.exercises}</p>;
}

export default Part;
