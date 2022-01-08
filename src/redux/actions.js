
import { GET_DATA_SUCCESS } from './types'

export const getData = (data) =>
{
    console.log("data",data)
    return {type: GET_DATA_SUCCESS, data: data}
}