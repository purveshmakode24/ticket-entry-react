import React, { useState } from 'react'
import Layout from '../components/Layout';
import { Navigate } from 'react-router-dom';
import { types } from 'util';
import { SEVERITY, TYPE } from '../utils';

const SupportTicketsCreate = () => {
    const [formData, setFormData] = useState({
        topic: "",
        description: "",
        severity: SEVERITY.LOW,
        type: TYPE.HARDWARE_ISSE
    })
    const [redirect, setRedirect] = useState(false);
    const severity = Object.values(SEVERITY);
    const types = Object.values(TYPE);

    const submit = async (e: any) => {
        e.preventDefault();
        console.log('formdata', formData)
        const res = await fetch('http://localhost:8000/api/support-tickets/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            window.alert('Ticket successfully created. It will get assigned to the agent after a moment.');
            setRedirect(true);
        } else {
            window.alert('Not able to create a new ticket at this moment. Please try again after some time.');
        }
    }

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData((values) => ({ ...values, [name]: value }));
    }

    if (redirect) {
        return <Navigate to={'/support-tickets/'} />
    }
    return (
        <Layout>
            <div className='d-flex justify-content-center'>
                <div className='col-md-6' >
                    <form onSubmit={submit}>
                        <h3 className='mt-3 mb-3'>Create a Ticket</h3>
                        <div className='form-group'>
                            <label>Topic*</label>
                            <input type='text' className='form-control' name='topic'
                                onChange={handleChange} required></input>
                        </div>
                        <div className='form-group pt-2'>
                            <label>Description*</label>
                            <textarea className='form-control' name='description'
                                onChange={handleChange} required></textarea>
                        </div>
                        <div className='form-group pt-2'>
                            <label>Severity*</label>
                            <select className="form-select" name='severity' onChange={handleChange} required>
                                {severity.map((s, index) => (
                                    <option key={index} value={s}>{s}</option>
                                ))}

                            </select>
                        </div>
                        <div className='form-group pt-2'>
                            <label>Type*</label>
                            <select className="form-select" name='type' defaultValue={TYPE.HARDWARE_ISSE} onChange={handleChange} required>
                                {types.map((t, index) => (
                                    <option key={index} value={t}>{t}</option>
                                ))}
                            </select>
                        </div>
                        <button className="w-100 btn btn-primary btn-lg mt-4" type="submit">Create</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default SupportTicketsCreate;