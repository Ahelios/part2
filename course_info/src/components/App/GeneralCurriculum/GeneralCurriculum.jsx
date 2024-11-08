import Course from './Course/Course'

function GeneralCurriculum({courses}) {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course) => <Course key={course.id} course={course}/>)}
    </div>
  )
}

export default GeneralCurriculum