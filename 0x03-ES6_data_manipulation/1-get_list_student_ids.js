export default function getListStudentIds(list_students) {
  if (!Array.isArray(list_students)) {
    return [];
  }
  return list_students.map((student) => student.id);
}
