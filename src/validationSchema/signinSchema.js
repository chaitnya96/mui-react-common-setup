import * as Yup from "yup";

const signInSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Please enter email"),
    password: Yup.string().required("Please enter password")
});
export default signInSchema