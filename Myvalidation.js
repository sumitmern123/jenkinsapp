import React from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup';
export default function Myvalidation() {
    const ValidationSchema=Yup.object().shape({
        fullname:Yup.string().required("Full name is required")
        .matches(/^[a-zA-Z ]+$/,"Only alphabate allow")
        .test('is-full-name','Please enter both fname and lname',function(value=''){
            const newArr=value.split(" ");
            return newArr.length>=2;
        }),
         gender:Yup.string().test('is-gender','Gender is required',function(value=''){
            // const newArr=value.split(" ");
            // return newArr.length>=2;
            return value!="";
        }),
        username:Yup.string()
                .required("Username is required")
                .min(6,"Username must be atleast 6 characters")
                .max(20,"Username must not execeed 20 characters"),
        email:Yup.string().required("Email is required").email("Email is invalid"),
        password:Yup.string()
        .required("Password is required")
        .min(6,"Password must be atleast 6 characters")
        .max(40,"Password must not execeed 40 characters"),
        confirmPassword:Yup.string()
                    .required("Confirm Password is required")
                    .oneOf([Yup.ref("password"),null],"Confirm Password doesnot match"),
        acceptTerms:Yup.bool().oneOf([true],"Accept term is required")          
    })
    const formik=useFormik({
        initialValues:{
            fullname:"",
            username:"",
            email:"",
            password:"",
            confirmPassword:"",
            gender:"",
            acceptTerms:false
        },
        validationSchema:ValidationSchema,
        onSubmit:(data)=>{
            console.log(data);
        }
    })
  return (
    <div>
        <h2> Form Validation with formik and yup</h2>
        <form onSubmit={formik.handleSubmit}>
            <div className='form-group'>
                <label> Full Name</label>
                <input type="text" className="form-control" name='fullname' onChange={formik.handleChange} value={formik.values.fullname}/>
                {/* Errors */}
                {formik.errors.fullname && formik.touched.fullname?
                <div className='alert alert-danger'>{formik.errors.fullname}</div>:''}
            </div>
            <div className='form-group'>
                <label> User Name</label>
                <input type="text" className="form-control" name='username' onChange={formik.handleChange} value={formik.values.username}/>
                {/* Errors */}
                {formik.errors.username && formik.touched.username?
                <div className='alert alert-danger'>{formik.errors.username}</div>:''}
            </div>
            <div className='form-group'>
                <label> Gender</label>
                <input type="radio"  name='gender' onChange={formik.handleChange} value="male"/>Male
                <input type="radio"  name='gender' onChange={formik.handleChange} value="female"/> Female
                {/* Errors */}
                {formik.errors.gender && formik.touched.gender?
                <div className='alert alert-danger'>{formik.errors.gender}</div>:''}
            </div>
            <div className='form-group'>
                <label> Email</label>
                <input type="text" className="form-control" name='email' onChange={formik.handleChange} value={formik.values.email}/>
                {/* Errors */}
                {formik.errors.email && formik.touched.email?
                <div className='alert alert-danger'>{formik.errors.email}</div>:''}
            </div>
            <div className='form-group'>
                <label> Password</label>
                <input type="password" className="form-control" name='password' onChange={formik.handleChange} value={formik.values.password}/>
                {/* Errors */}
                {formik.errors.password && formik.touched.password?
                <div className='alert alert-danger'>{formik.errors.password}</div>:''}
            </div>
            <div className='form-group'>
                <label> Confirm Password</label>
                <input type="password" className="form-control" name='confirmPassword' onChange={formik.handleChange} value={formik.values.confirmPassword}/>
                {/* Errors */}
                {formik.errors.confirmPassword && formik.touched.confirmPassword?
                <div className='alert alert-danger'>{formik.errors.confirmPassword}</div>:''}
            </div>
            <div className='form-group'>
                
                <input type="checkbox" name='acceptTerms' onChange={formik.handleChange}/><label> Accept Terms</label>
                    {/* Errors */}
                    {formik.errors.acceptTerms && formik.touched.acceptTerms?
                <div className='alert alert-danger'>{formik.errors.acceptTerms}</div>:''}
            </div>
            <input type="submit" className='btn btn-success' value="Validation"/>
        </form>
    </div>
  )
}
