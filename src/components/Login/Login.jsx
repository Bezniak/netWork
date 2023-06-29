import {useFormik} from 'formik';
import * as yup from "yup";
import s from './Login.module.css'

const onSubmit = async (values, actions) => {
    actions.resetForm();
};

const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().required("Required"),
});

const Login = () => {
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            email: "",
            password: "",
            toggle: false,
            checked: [],
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    return (
        <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="email">Email</label>
            <input
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter your email"
                onBlur={handleBlur}
                className={errors.email && touched.email ? s.inputError : ""}
            />
            {errors.email && touched.email && <p className="error">{errors.email}</p>}

            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password ? s.inputError : ""}
            />
            {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
            )}

            <button disabled={isSubmitting} type="submit">
                Submit
            </button>
        </form>
    );
};
export default Login;