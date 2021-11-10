import axios from "axios"

export default class ResumeService{
    getResumeById(id){
        return axios.get("http://localhost:8080/api/resumes/findByEmployeeId?id="+id)
    }

}