console.group("Task 1");

const student = {
  name: "Oleg",
  lastName: "Rakov",
  gender: "Male",
  phoneNamb: "+380 444618061",
  contactDetails: {
    city: "Zaporizhzhia",
    street: "al. Bielska",
    houseNumb: 34,
  },
  viewing() {
    console.log(this.contactDetails);
  },
  changeGender() {
    if (this.gender === "Male") {
      this.gender = "Female";
    } else if (this.gender === "Female") {
      this.gender = "Male";
    }
  },
};

console.log(student);
student.viewing();
student.changeGender();

console.groupEnd();

console.group("Task 2");

const universityInfo = {
  university: "ЗНУ",
  faculty: "Экономический факультет",
  department: "Кафедра экономической кибернетики",
  changeFaculty(newTitleFaculty) {
    this.faculty = newTitleFaculty;
  },
};

console.log(universityInfo);
universityInfo.changeFaculty("Математический факультет");

console.groupEnd();

console.group("Task 3");

function Book(autor, titleBook, datePublication, publisher) {
  if (!new.target) {
    return new Book(autor, titleBook, datePublication, publisher);
  }
  this.autor = autor;
  this.titleBook = titleBook;
  this.yearPublication = datePublication;
  this.publisher = publisher;
}

const bookAge = {};

bookAge.getBookAge = function () {
  return 2022 - this.yearPublication;
};

Book.prototype = bookAge;

const firstBook = new Book(
  "J. K. Rowling",
  "Harry Potter and the Philosopher's Stone",
  1997,
  "Bloomsbury(UK)"
);

console.log(firstBook);
console.log(firstBook.getBookAge());

console.groupEnd();
