import axios from 'axios';

export const login = async (username: string, password: string) => {
    const payload = {
        username,
        password
    }
    axios.post('http://127.0.0.1:8000/api/token/', payload).then(
        function (response) {
            localStorage.setItem('token', `Bearer ${response.data.access}`);
        }
    )
        .catch(function (error) {
            console.log(error);
        });
}

export const getProjects = async () => {
    axios.post('http://127.0.0.1:8000/api/projects/', {}, {
        headers: { 
        'Authorization': localStorage.getItem('token'),
     },
    }).then(
        function (response) {
            console.log("resp", response);
        }
    )
        .catch(function (error) {
            console.log(error);
        });
}