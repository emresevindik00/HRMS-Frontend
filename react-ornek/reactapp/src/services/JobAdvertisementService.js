import axios from "axios"

export default class JobAdvertisementService{
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getall")
    }

    getJobAdvertisementsById(id){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByJobAdvertisementId?id="+id)
    }

    getJobAdvertisementByCompanyName(company){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByCompanyName?companyName="+company)
    }

    addJobAdvertisement(job){
        return axios.post("http://localhost:8080/api/jobAdvertisements/add",job)
    }

}