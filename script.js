function PrintDeveloperbyMap() {
    const developers = employeeArray.filter(employee => employee.profession === "developer");
    const developerNames = developers.map(developer => developer.name);
    console.log(developerNames);
}

function PrintDeveloperbyForEach() {
    const developerNames = [];
    employeeArray.forEach(employee => {
        if (employee.profession === "developer") {
            developerNames.push(employee.name);
        }
    });
    console.log(developerNames);
}

function addData() {
    const newEmployee = {id: 4, name: "susan", age: "20", profession: "intern"};
    employeeArray.push(newEmployee);
    console.log("Added Employee:", newEmployee);
}


function removeAdmin() {
    employeeArray = employeeArray.filter(employee => employee.profession !== "admin");
    console.log("Array after removing admin employees:", employeeArray);
}

function ConcatinateArray() {
    const newArray = [
        {id: 5, name: "emma", age: "22", profession: "manager"},
        {id: 6, name: "michael", age: "25", profession: "designer"},
        {id: 7, name: "chris", age: "24", profession: "developer"}
    ];
    const concatenatedArray = employeeArray.concat(newArray);
    console.log("Concatenated array:", concatenatedArray);
}
