export default function getStudentIdsSum(list_students) {
  return list_students.reduce((sum, student) => sum + student.id, 0);
}
