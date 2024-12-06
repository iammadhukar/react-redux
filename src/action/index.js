export const actionList = {
    increment: "INCRMENT",
    decrement: "DECREMENT"
};

export const increment = ()=>{
    return {
        type: actionList.increment
    };
}

export const decrement =()=>{
    return {
        type: actionList.decrement
    };
}