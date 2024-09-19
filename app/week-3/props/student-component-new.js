
// This expects an entire object
// Gives us access to the entire object 
// More complicated
export default function StudentComponentNew({studentObj}){
    
    // Starting destructuring
    let {studentName, studentAge, address:{city, province} } = studentObj;

    return(
        // <div>
        //     <h3>{studentObj.studentName}</h3>
        //     <p>Age: {studentObj.studentAge}</p>
        //     <p>{studentObj.address.city} {studentObj.address.province}</p>
        // </div>
        <div className="bg-red-400 border border-yellow-600 p-5 my-5 mx-10">
            <h3>{studentName}</h3>
            <p>Age: {studentAge}</p>
            <p>{city} {province}</p>
        </div>
    )
}