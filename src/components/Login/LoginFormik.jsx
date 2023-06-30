// import {useFormik} from 'formik';
// import * as yup from "yup";
// import s from './LoginFormik.module.css'
// import './LoginFormik.module.css'
// import {loginThC} from "../../redux/auth-reducer";
//
// const onSubmit = async (values, actions) => {
//     loginThC(values.email, values.password)
//     actions.resetForm();
// };
//
// const basicSchema = yup.object().shape({
//     email: yup.string().email("Please enter a valid email").required("Required"),
//     password: yup.string().required("Required"),
// });
//
// const LoginFormik = () => {
//     const {
//         values,
//         errors,
//         touched,
//         isSubmitting,
//         handleBlur,
//         handleChange,
//         handleSubmit,
//     } = useFormik({
//         initialValues: {
//             email: "",
//             password: "",
//         },
//         validationSchema: basicSchema,
//         onSubmit,
//     });
//
//     return (
//         <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
//             <label htmlFor="email">Email</label>
//             <input
//                 value={values.email}
//                 onChange={handleChange}
//                 id="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 onBlur={handleBlur}
//                 className={errors.email && touched.email ? s.inputError : ""}
//             />
//             {errors.email && touched.email && <p className="error">{errors.email}</p>}
//
//             <label htmlFor="password">Password</label>
//             <input
//                 id="password"
//                 type="password"
//                 placeholder="Enter your password"
//                 value={values.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={errors.password && touched.password ? s.inputError : ""}
//                 className={s.input}
//             />
//             {errors.password && touched.password && (
//                 <p className="error">{errors.password}</p>
//             )}
//
//             <button disabled={isSubmitting} type="submit">
//                 Login
//             </button>
//         </form>
//     );
// };
// export default LoginFormik;