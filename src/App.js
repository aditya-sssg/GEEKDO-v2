import { Form } from "./Components/Form";

function App() {
  return (
    <div className="wrapper">
      <h3>
        Manage your day-to-day <br />
        tasks with <mark class="col"> GEEKDO</mark>
      </h3>
      <div className="image"></div>
    <h4>Plan, Organize and achieve tasks on the go.

</h4>
      <div className="form-and-todo-box">
        <Form />
      </div>
    </div>
  );
}

export default App;
