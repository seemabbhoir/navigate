
export function getLocalStorage(){
    return{
        email:localStorage.getItem("email"),
        password:localStorage.getItem("password"),
    };
}