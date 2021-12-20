import axios from "axios"

export const getData = () => async (dispatch) => {
    try {
        dispatch({type : "GET_DATA_REQUEST"})
        const res = await axios.get("https://backend-api-123.herokuapp.com/")
        console.log(res)
        dispatch({type : "GET_DATA_SUCCESS", payload : res.data})
    } catch (error) {
        console.log(error)
    }
}