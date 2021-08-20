export const getDataAPI = async() => {
    const requestOption = {
        method : 'GET',
    }
    const url = "https://jsonplaceholder.typicode.com/todos";
    let res = await fetch(url,requestOption)
    return res.json()
}