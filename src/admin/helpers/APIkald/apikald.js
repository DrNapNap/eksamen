import axios from 'axios'

// BASE URL
const api = {
    baseUrl: 'http://localhost:5039/'
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

export const sendNewsSubscription = (besked) => {

    let formdata = new FormData(besked);

    let response = axios.post(api.baseUrl + "newssubscription", formdata) 
        .then(response => { return response.data })
        .catch(error => { return "error" })

    return response;
}


export const hentAlleslider = () => {

    let response = axios.get(api.baseUrl + "slider")
        .then(response => { return response.data })
        .catch(error => { return "error" })

    return response;
}

export const hentUdslider = (id) => {

    let response = axios.get(api.baseUrl + "slider/" + id) 
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

export const hentAllecategory= () => {

    let response = axios.get(api.baseUrl + "category")
        .then(response => { return response.data })
        .catch(error => { return "error" })

    return response;
}


export const hentUdvalgtProduct = (id) => {

    let response = axios.get(api.baseUrl + "product/" + id) 
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

export const soeg = (soeg) => {

    let response = axios.get(api.baseUrl + "product/search/" + soeg) 
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

//login
export const loginb = (brugerlogin) => {
    let formdata = new FormData(brugerlogin);
    
        let response = axios.post(api.baseUrl + "login/login", formdata, {withCredentials:true}) 
            .then(response => { return response.data })
            .catch(error => { 
                console.log(error);
                return "error"; })
        return response;
    }


export const logud = () => {


    let response = axios.get(api.baseUrl + "login/logout", { withCredentials: true }) 
        .then(response => { return response.data })
        .catch(error => { return "error"; })
    return response;
}


// Admin ⬇️


export const retabout = (ret) => {

    let formdata = new FormData(ret)

    let response = axios.put(api.baseUrl + "about/admin" , formdata, { withCredentials: true })
        .then(response => { return response.data })
        .catch(error => { return "error"; })
    console.log(formdata);
    return response;
}

export const retUser = (ret, id) => {

    let formdata = new FormData(ret)

    let response = axios.put(api.baseUrl + "user/admin/" + id , formdata, { withCredentials: true })
        .then(response => { return response.data })
        .catch(error => { return "error"; })
    console.log(formdata);
    return response;
}



export const hentUduser = (id) => {

    let response = axios.get(api.baseUrl + "user/admin/" + id , { withCredentials: true }) 
        .then(response => { return response.data })
        .catch(error => { return "error" })

    return response;
}
export const Opretuser = (nye) => {
    let formdata = new FormData(nye)

    let response = axios.post(api.baseUrl + "user/admin/" , formdata, { withCredentials: true }) 
        .then(response => { return response.data })
        .catch(error => { return "error"; })

    return response;
}


export const retFooter = (ret) => {

    let formdata = new FormData(ret)

    let response = axios.put(api.baseUrl + "footer/admin" , formdata, { withCredentials: true })
        .then(response => { return response.data })
        .catch(error => { return "error"; })
    console.log(formdata);
    return response;
}


export const hentAllecontactadmin = (id) => {

    let response = axios.get(api.baseUrl + "contact/admin/" + id , { withCredentials: true }) 
        .then(response => { return response.data })
        .catch(error => { return "error" })

    return response;
}


export const hentAlleNewssubscription = (id) => {

    let response = axios.get(api.baseUrl + "newssubscription/admin/" + id , { withCredentials: true }) 
        .then(response => { return response.data })
        .catch(error => { return "error" })

    return response;
}


//opRet
export const Opret = (nyeproduct) => {
    let formdata = new FormData(nyeproduct)

    let response = axios.post(api.baseUrl + "product/admin", formdata, { withCredentials: true }) 
        .then(response => { return response.data })
        .catch(error => { return "error"; })

    return response;
}


export const OpretSlder = (nyeproduct) => {
    let formdata = new FormData(nyeproduct)

    let response = axios.post(api.baseUrl + "slider/admin", formdata, { withCredentials: true }) 
        .then(response => { return response.data })
        .catch(error => { return "error"; })

    return response;
}



export const ret = (retEvent, eventID) => {

    let formdata = new FormData(retEvent)

    let response = axios.put(api.baseUrl + "product/admin/" + eventID, formdata, { withCredentials: true })
        .then(response => { return response.data })
        .catch(error => { return "error"; })
    console.log(formdata);
    return response;
}

