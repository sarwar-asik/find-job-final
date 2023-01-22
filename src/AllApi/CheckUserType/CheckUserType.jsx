import { ServerApi } from "../MainApi"

export const checkUserType = (email) => {
    const url = `${ServerApi}/user/checkUser/type?email=${email}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            return data;
        })
}