import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./style/contact.css"
import { useFormik } from 'formik'
import { ContactSchema } from "../components/schemas"
import { toast } from 'react-toastify'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import api from "../components/api_client/api"

const Contact = ({ data4 }) => {
    const initialValues = {
        contactresid: "",
        name: "",
        email: "",
        message: ""
    }
    const { values, touched, errors, setFieldValue, handleBlur, handleChange } = useFormik({
        initialValues: initialValues,
        validationSchema: ContactSchema,
        onSubmit: (values, action) => {
            action.resetForm()
        }
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        const generateRandomAlphaNumeric = () => {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';

            for (let i = 0; i < 8; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                result += characters[randomIndex];
            }

            return result;
        };
        const randomCombination = generateRandomAlphaNumeric();
        console.log(randomCombination);
        const allInputvalue = {
            contactresid: randomCombination,
            name: values.name,
            email: values.email,
            message: values.message
        };
        if (errors.name && touched.name || errors.email && touched.email
            || errors.message && touched.message
            || values.name === "" || values.email === ""
            || values.message === "") {
            toast.error("Please fill all required fields")
        }
        else {
            await api.post("/api/contactresponse/contactrestypes", allInputvalue)
                .then(response => {
                    console.log(response)
                    toast.success("Sucessfully Submitted")
                    // clear()
                })
                .catch(error => {
                    toast.error("Unsucessfull to Submit")
                    console.log(error)
                })
            clear()
        }
    }

    const clear = () => {
        setFieldValue("name", "")
        setFieldValue("email", "")
        setFieldValue("message", "")
        setFieldValue("", "")
        document.getElementById("name").values = ""
        document.getElementById("email").values = ""
        document.getElementById("message").values = ""

    }

    if (!data4) {
        return <div>Loading...</div>; // Show a loading state while data is being fetched
    }
    return (
        <div className="maincontainer">
            <div className="d-flex flex-column mark1">
                <h1 className="flex-row titlr">Contact Us</h1>
                <p className="flex-row descrp">{data4.descrip}</p>
                <div className="flex-row address">
                    <p><FaMapMarkerAlt size={25} color="black" /> {data4.address}</p>
                </div>
                <p id='phone'><FaPhone size={25} color="black" /> {data4.contactno}</p>
                <p id='email2'><FaEnvelope size={25} color="black" /> {data4.email}</p>
            </div>
            <div className="d-flex flex-column mark2">
                <form onSubmit={handleSubmit}>
                    <div className="form-floating nam">
                        <input type="text"
                            className={errors.name && touched.name ? "form-control inputerror" : "form-control"}
                            id="name"
                            placeholder="xyz"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                        <label htmlFor="name">Name</label>
                        {errors.name && touched.name ? (
                            <p className="form-error">{errors.name}</p>
                        ) : null}
                    </div>
                    <div className="form-floating emailinput">
                        <input type="email"
                            className={errors.email && touched.email ? "form-control inputerror" : "form-control emaill"}
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="name@example.com" />
                        <label htmlFor="email">
                            Email address
                        </label>
                        {errors.email && touched.email ? (
                            <p className="form-error">{errors.email}</p>
                        ) : null}
                    </div>
                    <div className="form-floating msgg">
                        <textarea
                            className={errors.message && touched.message ? "form-control inputerror" : "form-control"}
                            placeholder="Leave a comment here"
                            id="message"
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                        <label htmlFor="message">Message</label>
                        {errors.message && touched.message ? (
                            <p className="form-error">{errors.message}</p>
                        ) : null}
                    </div>
                    <button type="submit"
                        className="btn btn-primary buton">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
