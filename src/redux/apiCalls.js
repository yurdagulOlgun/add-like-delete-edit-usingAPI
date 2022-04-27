import { getUsersFailure, getUsersStart, getUsersSuccess } from "./userRedux";
import { BASE_AXIOS } from "../data";

export const getUsers = async (dispatch,limit) => {
    dispatch(getUsersStart())
    try {
        const res = await BASE_AXIOS.get(`/users?total=60&limit=${limit}`)
        dispatch(getUsersSuccess(res.data.users))
    } catch (error) {
        dispatch(getUsersFailure())
    }
}