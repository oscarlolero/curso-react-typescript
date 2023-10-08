import React from "react";
import useNewFollowerForm from "../hooks/useNewFollowerForm.tsx";

interface FormProps {
  onNewFollower: (newFollower: Follower) => void
}

const Form = ({onNewFollower}: FormProps) => {
  // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE);

  const [inputValues, dispatch] = useNewFollowerForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewFollower(inputValues);
    handleClear();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value
      }
    });
    // setInputValues({
    //   ...inputValues,
    //   [e.target.name]: e.target.value,
    // });
  }

  const handleClear = () => {
    dispatch({
      type: "clear"
    });
    // setInputValues(INITIAL_STATE)
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <input onChange={handleChange} value={inputValues.name} type="text" placeholder="Name" name="name"/>
        <input onChange={handleChange} value={inputValues.age} type="text" placeholder="Age" name="age"/>
        <textarea onChange={handleChange} value={inputValues.description} placeholder="Description" name="description"/>
        <button onClick={handleClear} type="button">Clear</button>
        <button type="submit">Add</button>
      </form>
    </div>

  );
}

export default Form;
