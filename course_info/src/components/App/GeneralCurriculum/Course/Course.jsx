import Header from './Header/Header';
import Content from './Content/Content';

function Course({ course }) {
	console.log("Course id is", course.id)

	return (
		<>
			<Header headerText={course.name} />
			<Content parts={course.parts} />
		</>
	);
}

export default Course;
