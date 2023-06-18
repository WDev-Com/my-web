import * as Yup from "yup"

export const ContactSchema = Yup.object({
    name: Yup.string().min(10).max(100).required("Please enter your address"),
    email: Yup.string().email().required("Please enter your email Id"),
    message: Yup.string().min(5).max(270).required("Please enter your message")
})
