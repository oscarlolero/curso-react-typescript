import {useReducer} from "react";

interface FormState {
  inputValues: Follower
}

// para variar se uso type
type FormReducerAction = {
  type: "change_value",
  payload: {
    inputName: string,
    inputValue: string
  }
} | {
  type: "clear"
}

const INITIAL_STATE: Follower = {
  name: '',
  avatar: 'https://i.pravatar.cc/150?img=8',
  age: 0,
  description: ''
}

const formReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
  switch (action.type) {
    case "change_value": {
      const {inputName, inputValue} = action.payload;
      return {
        ...state,
        [inputName]: inputValue
      }
    }
    case "clear":
      return INITIAL_STATE;
  }
}


const useNewFollowerForm = () => {
  return useReducer(formReducer, INITIAL_STATE); //evitar hacer esto, mejor ir por el camino de:
  /*
    const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const clearForm = useCallback(() => dispatch({type : 'clear'}), []);

  return {
    formState: inputValues,
    clearForm
  }
   */
}

export default useNewFollowerForm;
