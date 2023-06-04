import axios from "axios"
class ProducsApi {
    constructor() {
        this._apiUrl = '/api/products'
    }

    getProducts(){
        return axios.get(this._apiUrl);
    }
    getProductsbyName(name){
        try {
            return axios.get(this._apiUrl + `/${name}`);
        } catch (error) {
            return 'Product not found';
        }
        
    }
    addProduct(product){
        const datatosend = {
            'text': product
        }
        return axios.post(this._apiUrl, datatosend);
    }
    removeProduct(product){
        try {
            return axios.delete(this._apiUrl + `/${product}`);
        } catch (error) {
            return 'Product not found';
        }
    }
}
export default new ProducsApi();