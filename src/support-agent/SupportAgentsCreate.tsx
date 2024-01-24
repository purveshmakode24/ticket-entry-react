import React, { useState } from 'react'
import Layout from '../components/Layout';
import { Navigate } from 'react-router-dom';
import { API_ROOT_URL } from '../config';

const SupportAgentsCreate = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        description: ""
    })
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: any) => {
        e.preventDefault();
        console.log('formdata', formData)
        const res = await fetch(API_ROOT_URL + 'support-agents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            window.alert('Agent Successfully Created!');
            setRedirect(true);
        } else {
            window.alert('Could not create Agent at this moment. Please try after some time.')
        }
        
    }

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData((values) => ({ ...values, [name]: value }));
    }

    if (redirect) {
        return <Navigate to={'/support-agents/'} />
    }

    return (
        <Layout>
            <div className='d-flex justify-content-center'>
                <div className='col-md-6' >
                    <form onSubmit={submit}>
                        <h3 className='mt-3 mb-3'>Create Agent</h3>
                        <div className='form-group'>
                            <label>Name*</label>
                            <input type='text' className='form-control' name='name'
                                onChange={handleChange} required></input>
                        </div>
                        <div className='form-group pt-2'>
                            <label>Email*</label>
                            <input type='email' className='form-control' name='email'
                                onChange={handleChange} required></input>
                        </div>
                        <div className='form-group pt-2'>
                            <label>Phone*</label>
                            <input type='text' className='form-control' name='phone'
                                onChange={handleChange} required></input>
                        </div>
                        <div className='form-group pt-2'>
                            <label>Description*</label>
                            <textarea className='form-control' name='description'
                                onChange={handleChange} required></textarea>
                        </div>
                        <button className="w-100 btn btn-primary btn-lg mt-4" type="submit">Create</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default SupportAgentsCreate;