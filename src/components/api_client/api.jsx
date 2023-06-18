import axious from "axios"

const API = axious.create({
    baseURL: "http://192.168.10.4:8081"
})

export default API