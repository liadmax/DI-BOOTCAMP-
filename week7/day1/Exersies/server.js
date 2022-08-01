const axios = require('axios');

const getUsers = async() =>{
    try{
        var res = await axios.get('https://jsonplaceholder.typicode.com/users')
        // console.log(res)
        return res.data;

    }catch(e){
        console.log(e);

    }
}
module.exports{
    getUsers()
}