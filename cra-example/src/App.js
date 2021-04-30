import "./App.css";

// ### Checking for understanding
// 1. Inside the `App.js`, create a variable and assign it a value equal to your full name.
// 2. Use embedding techniques we demonstrated previously to:
//    - display your name
//    - capitalize both first and last name
//    - create and invoke a function that will return just capitalized first letters of your fist and last name.
//    - utilize image _logo_ and display it.

function App() {
  const name = "matt struhs";
  const [firstName, lastName] = name.split(" ");

  function returnFirstLast(name) {
    const [firstName, lastName] = name.split(" ");
    return firstName[0] + lastName[0];
  }

  return (
    <div className="App">
      {/* {firstName[0].toUpperCase() + firstName.slice(1)}
      {lastName[0].toUpperCase() + lastName.slice(1)} */}
      {returnFirstLast(name)}
    </div>
  );
}

export default App;
