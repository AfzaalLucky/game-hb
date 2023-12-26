import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd9bd078890aa4379984a13f8f8b1d315'
    }
});
