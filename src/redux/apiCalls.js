import { getUsersFailure, getUsersStart, getUsersSuccess } from "./userRedux";
import { BASE_AXIOS } from "../data";

export const getUsers = async (dispatch) => {
    dispatch(getUsersStart())
    try {
        const res = await BASE_AXIOS.get(`/users?total=60&limit=60`)
        dispatch(getUsersSuccess(res.data.users))
        // console.log("apicalls:::",limit);
    } catch (error) {
        dispatch(getUsersFailure())
    }
}