import Props from "./Props";
import ObjectAsProps from "./ObjectAsProps";
import ArrayOfObjectAsProps from "./ArrayOfObjectAsProps";

function Index() {
  const stdDetails = {
    name: "Peter",
    age: 23,
    course: "React JS",
  };

  const stdDetailsArray = [
    { id: 1, name: "Peter", age: 21 },
    { id: 2, name: "Parker", age: 22 },
    { id: 3, name: "John", age: 23 },
    { id: 4, name: "Rose", age: 24 },
    { id: 5, name: "Joey", age: 25 },
  ];

  return (
    <div>
      {/* passing props (name, age) to Props component */}
      <Props name="John" age={23} />
      <Props name="Peter" age={25} />

      {/* passing object as props (stdDetails) to ObjectAsProps component */}
      <ObjectAsProps obj={stdDetails} />

      {/* passing array of object as props (stdDetailsArray) to ArrayOfObjectAsProps component */}
      <ArrayOfObjectAsProps obj={stdDetailsArray} />
    </div>
  );
}

export default Index;
