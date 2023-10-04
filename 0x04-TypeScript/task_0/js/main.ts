interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student_1: Student = {
  firstName: "Mehdi",
  lastName: "Masmar",
  age: 23,
  location: "Morocco",
};

const student_2: Student = {
  firstName: "Test",
  lastName: "Masmar",
  age: 22,
  location: "USA",
};

const studentsList: Student[] = [student_1, student_2];

function renderTable() {
  const table = document.createElement("table");
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.innerHTML = student.firstName;
    const locationCell = row.insertCell();
    locationCell.innerHTML = student.location;
  });
  document.body.appendChild(table);
}

renderTable();
