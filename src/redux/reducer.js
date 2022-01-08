import { GET_DATA_SUCCESS } from "./types"
const dafaultState = 
{
    data:[]
}
function reducer(state = dafaultState, action)
{
    console.log("action.payload",action);
    switch (action.type)
    {
        case GET_DATA_SUCCESS:
            return {
                ...state,
                data:action.data
            }
        default : return state
    }
}
export default reducer