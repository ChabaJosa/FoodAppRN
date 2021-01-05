import axios from "axios";

export default axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer uXyQsaSz-887zc-K0_ZHCrGWOLzWfgiRcGdRb9WtBTt3EX9I-hTw7fcq71s1gvdWK4g4X1_mmE48qdflUmsYUAu6BMJOPc5O4CupaIqiDe8MOgGIn24_IUGAagPDXnYx"
    }
})

