import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 4aQzrcPjnCpAqmcMhKNqyPNLXTKR6Dsjshq-4CQUmyyi4DWJZ2AL_zOohcRpWAvOnm6tvm0sPbDbdA0H6N2o7IwwPBVqPf7nXWvcQ8kfyM3NtsVKM42wuRhdje97XnYx'
    }
});
