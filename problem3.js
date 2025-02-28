class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  addDepartment(dep) {
    this.departments.push(dep);
  }

  removeDepartment(dep) {
    let index = this.departments.indexOf(dep);
    if (index !== -1) {
      this.departments.splice(index, 1);
      return "ochirildi";
    } else {
      return "topilmadi";
    }
  }

  showDepartments() {
    console.log(this.departments);
  }
}

let uni = new University("My University");


uni.addDepartment("Computer Science");
uni.addDepartment("Mathematics");
uni.addDepartment("Physics");
uni.addDepartment("Engineering");
uni.addDepartment("Biology");


console.log(uni.removeDepartment("Mathematics"));
console.log(uni.removeDepartment("Biology"));


uni.showDepartments();
