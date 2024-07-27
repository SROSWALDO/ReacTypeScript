import { useReducer, useRef, useState } from "react";
import { Sub } from "../types";
import useNewForm from "./useNewSub";



interface FormProps {
  onNewSub: (newSub: Sub) => void;
}



const Form = ({ onNewSub }: FormProps) => {

const [inputValues, dispatch] = useNewForm()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValues);
    handleClear()
  };

  const divRef = useRef<HTMLDivElement>(null);

//   const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = e.target
    dispatch({
        type: "change_value",
        payload: {
            inputName: name,
            inputValue: value
        }
    })
    
  };

  const handleClear = () => {
    dispatch({ type: "clear" })
  };


 
  return (
    <div ref={divRef}>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          onChange={handleChange}
          value={inputValues.subMonths}
          type="text"
          name="subMonths"
          placeholder="subMonths"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          name="description"
          placeholder="description"
        />
        <button onClick={handleClear} type="button">Clear</button>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Form;
