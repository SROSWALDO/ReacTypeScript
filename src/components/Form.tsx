import { useState } from "react";
import { Sub } from "../types";

interface FormState {
    inputValues: Sub
}

interface FormProps {
    onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>
}

const Form = ({ onNewSub }: FormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    onNewSub(subs => ([...subs,inputValues ]))
  };

  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>  ) => {
    setInputValues({
        ...inputValues,
        [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="nick" />
        <input onChange={handleChange} value={inputValues.subMonths} type="text" name="subMonths" placeholder="subMonths" />
        <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar" />
        <textarea onChange={handleChange} value={inputValues.description}  name="description" placeholder="description" />

        <button>Save</button>
      </form>
    </div>
  );
};

export default Form;
