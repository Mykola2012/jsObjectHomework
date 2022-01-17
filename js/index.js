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
  genderChange() {
    if (this.gender === "Male") {
      return (this.gender = "Female");
    } else if (this.gender === "Female") {
      return (this.gender = "Male");
    }
  },
};

console.log(student);
student.viewing();
student.genderChange();

console.groupEnd();

console.group("Task 2");

const universityInfo = {
  university: "ЗНУ",
  faculty: "Экономический факультет",
  department: "Кафедра экономической кибернетики",
  newFaculty(newTitleFaculty) {
    this.faculty = newTitleFaculty;
  },
};

console.log(universityInfo);
universityInfo.newFaculty("Математический факультет");

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

bookAge.isBookAge = function () {
  return `${2022 - this.yearPublication} years`;
};

Book.prototype = bookAge;

const firstBook = new Book(
  "J. K. Rowling",
  "Harry Potter and the Philosopher's Stone",
  1997,
  "Bloomsbury(UK)"
);

console.log(firstBook);
console.log(firstBook.isBookAge());

console.groupEnd();
