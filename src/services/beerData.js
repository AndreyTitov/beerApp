import axios from 'axios';

class dataBeer {
    getBeerData() {
        return axios.get('https://api.punkapi.com/v2/beers')
            .then(response => {
                const data = response.data;
                return data;
            })
            .catch(error => {
                console.log(error)
            })
    }
}

const data = new dataBeer();

export default data;