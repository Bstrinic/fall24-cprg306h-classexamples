export default function FunctionPage() {
  // creating a utility function / camelCase
  function helloWorld(username, dayOfWeek) {
    // return "Hello World! Welcome back " + username + ". Today is " + dayOfWeek;

    // Using template literals
    return `Hello World! Welcome back ${username}. Today is ${dayOfWeek}`;
  }

  // Arrow Functions
  const helloWorld2 = (username, dayOfWeek) => {
    return `Hello World! Welcome back ${username}. Today is ${dayOfWeek}`;
  };

  // The arrow is effectively the return statement
  const helloWorld3 = (username) => `Hello ${username}`;
  const helloMath = (a, b) => a + b;

  const louder = (textFunc, username) => {
    // check to make sure that textFunc is a function 
    // check to make sure the function is consistent with my logic
    let thisText = textFunc(username);
    return `${thisText.toUpperCase()}!!!!`;
  }

  // another higher order function
  const multiplyBy = (num1) => {
    return (num2) => num1 * num2;
  }

  const multiplyByThree = multiplyBy(3);
  const multipleByTen = multiplyBy(10);

  const originalFunc = (num) => num + 2;
  const newFunc = originalFunc;

  return (
    <main>
      <h1>Functions</h1>
      <p>{helloWorld("Alice", "Wednesday")}</p>
      {/* Evoking helloWorld2 */}
      <p>{helloWorld2("Joe", "Thursday")}</p>
      <p>{helloWorld3("Bob")}</p>s
      <p>{helloMath(3, 4)}</p>
      <p>{louder(helloWorld3, "Robert")}</p>
      <p>{louder(helloWorld2, "Anne")}</p>
      <p>{multiplyByThree(7)}</p>
      <p>{multipleByTen(7)}</p>
      <p>{newFunc.name}</p>
    </main>
  );
}
