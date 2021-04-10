import axios from "axios";

export function getPosts() {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
}

axios({
    method:'post',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: {
        id: '',
        title:'',
        body:''
    }
})