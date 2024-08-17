export default class Api {
    async  fetchData() {
        let res = await fetch('http://localhost:3000/movies', { method: 'GET' })
        let data = await res.json()
        return data
    }
}
