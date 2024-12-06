import { actionList } from "../action";


const initialState = 0;

const incrementDecrement = (state = initialState, action)=>{
    switch (action.type){
        case actionList.increment:
            return state+1;
        case actionList.decrement:
            return state-1;
        default :
            return state;
    }
}

export default incrementDecrement;