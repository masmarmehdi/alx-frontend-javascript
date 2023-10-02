export default function getStudentsByLocation(list_students, location) {
  return list_students.filter((student) => student.location === location);
}
