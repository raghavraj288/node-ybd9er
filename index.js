const students = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 100,
    chemistry: 80,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 80,
    chemistry: 100,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 30,
    chemistry: 40,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 40,
    chemistry: 30,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];



students.sort((a, b) => {
  if (a.chemistry + a.biology < b.chemistry + b.biology) {
    return 1;
  } else if (a.chemistry + a.biology > b.chemistry + b.biology) {
    return -1;
  } else {
    if (a.biology < b.biology) {
      return 1;
    } else if (a.biology > b.biology) {
      return -1;
    } else {
      // Sort by date of birth in ascending order (oldest to youngest)
      const dobA = new Date(a.dob.split("-").reverse().join("-"));
      const dobB = new Date(b.dob.split("-").reverse().join("-"));
      return dobA - dobB;
    }
  }
});

const sortedNames = students.map((student) => student.name);
console.log(sortedNames);
