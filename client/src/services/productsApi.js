import axios from "axios"
class ProducsApi {
    constructor() {
        this._apiUrl = 'http://localhost:3000/api/products'
    }

    getProducts(){
        return axios.get(this._apiUrl);
    }
}
export default new ProducsApi();