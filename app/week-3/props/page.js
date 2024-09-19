import StudentComponent from "./student-component"
import StudentComponentNew from "./student-component-new"


export default function PropsPage() {

    let studentOne = {
        studentName: 'Joe',
        studentAge: '25',
        hasGraduated: false,
        schedule: ["CPRG-123", "CPRG-456", "CPRG-789", "CPRG-306"],
        address: {
        line1: "123 Main St. ",
        city: "Calgary",
        province: "AB",
        }
    }

    // Only using the keys that are being used
    let studentTwo = {
        studentName: 'Alice',
        studentAge: 23,
        address: {
            city: 'Edmonton',
            province: 'AB'
        }
    }

    return(
        <main>
            <StudentComponent sName="Kevin" sAge="21" sCity="Edmonton" sProvince="AB" />
            <StudentComponent
                sName={studentOne.studentName}
                sAge = {studentOne.studentAge}
                sCity = {studentOne.address.city}
                sProvince = {studentOne.address.province}
            />
            <StudentComponentNew studentObj={studentOne}></StudentComponentNew>
            <StudentComponentNew studentObj={studentTwo}></StudentComponentNew>
        </main>
    )
} 