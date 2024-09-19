

export default function ObjectsPage() {

    // building out an object 
    // Must use ':' when inside of a object
    // Stick with either double or single quotes
    let studentOne = {
        studentName: 'Joe',
        studentAge: 20,
        hasGraduated: false,
        schedule: ["CPRG-123", "CPRG-456", "CPRG-789", "CPRG-306"],
        address: {
            line1: "123 Main Street",
            city: 'Calgary',
            province: "AB",
        },
    }

    // Starting to destructure 
    let {studentName, studentAge, address:{city, province}, schedule: [,,, webDev2]} = studentOne;
    

    return(
        <main>
            <h1>Objects</h1>
            <h2>Dot Notation</h2>
            <p>Name: {studentOne.studentName}</p>
            <p>Age: {studentOne.studentAge}</p>
            <p>Web Dev 2: {studentOne.schedule[3]}</p>
            <p>City: {studentOne.address.city}</p>

            <h2>Destructuring</h2>
            <p>Name: {studentName}</p>
            <p>Age: {studentAge}</p>
            <p>City: {city}</p>
            <p>Web Dev 2: {webDev2}</p>
        </main>
    );
}