import {atom, useRecoilState,selector} from 'recoil'


export const userState = atom(
    {
        key: "userInfo",
        default: {

        }
    }
)

export const countriesQuery = selector({
    key: "countries",
    get: async (get) => {
        try {
            const uss=get(userState);
            const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
            console.log(res);
            const countries = await res.json()
            return {...uss,title:countries.title};
        } catch (e) {
            console.error("ERROR GET /countries", e)
        }
    },
})
