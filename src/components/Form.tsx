import React, {useState} from "react";

interface FormState {
  inputValues: Follower
}

interface FormProps {
  onNewFollower: (newFollower: Follower) => void
}

const Form = ({ onNewFollower }: FormProps) => {
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    name: 'Pete',
    avatar: 'https://i.pravatar.cc/150?img=8',
    age: 15,
    description: 'test'
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewFollower(inputValues);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <input onChange={handleChange} value={inputValues.name} type="text" placeholder="Name" name="name"/>
        <input onChange={handleChange} value={inputValues.age} type="text" placeholder="Age" name="age"/>
        <textarea onChange={handleChange} value={inputValues.description} placeholder="Description" name="description"/>
        <button type="submit">Add</button>
      </form>
    </div>

  );
}

export default Form;
