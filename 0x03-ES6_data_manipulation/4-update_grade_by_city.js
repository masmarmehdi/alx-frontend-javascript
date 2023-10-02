export default function updateStudentGradeByCity(
  list_students,
  city,
  newGrades
) {
  const filtered_list = list_students.filter(
    (student) => student.location === city
  );
  filtered_list.map((student) => {
    const current_student = newGrades.find(
      (grade) => grade.studentId === student.id
    );
    student.id == current_student?.studentId
      ? (student["grade"] = current_student.grade)
      : (student["grade"] = "N/A");
  });
  return filtered_list;
}
