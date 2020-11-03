import axios from 'axios'

// BASE URL
const api = {
    baseUrl: 'http://localhost:5039/'
}


export const hentAlleslider = () => {

    let response = axios.get(api.baseUrl + "slider")
        .then(response => { return response.data })
        .catch(error => { return "error" })

    return response;
}

export const hentAlleproduct = () => {

    let response = axios.get(api.baseUrl + "product")
        .then(response => { return response.data })
        .catch(error => { return "error" })

    return response;
}


export const hentUdvalgt = (id) => {

    let response = axios.get(api.baseUrl + "product/category/" + id) 
        .then(response => { return response.data })
        .catch(error => { return "error" })

    return response;
}

export const soegEvent = (soeg) => {

    let response = axios.get(api.baseUrl + "event/soeg/" + soeg) 
        .then(response => { return response.data })
        .catch(error => { return "error" })

    return response;

}

export const hentabout = () => {

    let response = axios.get(api.baseUrl + "about")
        .then(response => { return response.data })
        .catch(error => { return "error" })

    return response;
}


export const hentAllegear = () => {

    let response = axios.get(api.baseUrl + "gear")
        .then(response => { return response.data })
        .catch(error => { return "error" })

    return response;
}


export const hentfooter = () => {

    let response = axios.get(api.baseUrl + "footer")
        .then(response => { return response.data })
        .catch(error => { return "error" })

    return response;
}




export const sendKontaktbesked = (besked) => {

    let formdata = new FormData(besked);

    let response = axios.post(api.baseUrl + "contact", formdata) 
        .then(response => { return response.data })
        .catch(error => { return "error" })

    return response;
}


//opRet
export const Opret = (nytEvent) => {
    let formdata = new FormData(nytEvent)

    let response = axios.post(api.baseUrl + "event/admin", formdata, { withCredentials: true }) 
        .then(response => { return response.data })
        .catch(error => { return "error"; })

    return response;
}



export const ret = (retEvent, eventID) => {

    let formdata = new FormData(retEvent)

    let response = axios.put(api.baseUrl + "event/admin/" + eventID, formdata, { withCredentials: true })
        .then(response => { return response.data })
        .catch(error => { return "error"; })
    console.log(formdata);
    return response;
}

//login

export const loginb = (brugerlogin) => {
    let formdata = new FormData(brugerlogin);

    let response = axios.post(api.baseUrl + "login/login", formdata, { withCredentials: true }) 
        .then(response => { return response.data })
        .catch(error => {
            console.log(error);
            return "error";
        })
    return response;
}


export const logud = () => {


    let response = axios.get(api.baseUrl + "login/logout", { withCredentials: true }) 
        .then(response => { return response.data })
        .catch(error => { return "error"; })
    return response;
}
