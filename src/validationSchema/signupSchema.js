import * as Yup from "yup";

const signupSchema = Yup.object().shape({
    firstName: Yup.string().required('Firs tName is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string()
        .email("Invalid email address")
        .required("Please enter email"),
    password: Yup.string().required('Password is required'),
    agree: Yup.boolean().oneOf([true], 'Check mark required'),

});
export default signupSchema;