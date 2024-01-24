import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { API_ROOT_URL } from '../config';


export interface Agent {
    _id: number,
    name: string,
    email: string,
    phone: string,
    description: string,
    active: string,
    dateCreated: string
}

const SupportAgents = () => {
    const [agents, setAgents] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await fetch(API_ROOT_URL + 'support-agents');
                const data = await response.json();
                console.log(data);
                setAgents(data);
            } catch (err) {
                console.log('Some error occured:', err);
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, []);

    const rowMsgTempalate = (text: string) => {
        return <tr><td colSpan={10} style={{ padding: '10px', background: 'transparent' }}>{text}</td></tr>
    }

    return (
        <>
            <Layout>
                <div className='pt-3 pb-2 mb-3 border-bottom'>
                    <div className='btn-toolbar mb-2 mb-md-8'>
                        <Link to='/support-agents/create' className='btn btn-primary'>Create +</Link>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Description</th>
                                <th>Active</th>
                                <th>Date Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading && (rowMsgTempalate('Loading...'))}
                            {!loading && !agents.length && (rowMsgTempalate('No agents available right now.'))}
                            {agents.map((a: Agent) => {
                                return (
                                    <tr key={a._id}>
                                        <td>{a._id}</td>
                                        <td>{a.name}</td>
                                        <td>{a.email}</td>
                                        <td>{a.phone}</td>
                                        <td>{a.description}</td>
                                        <td>{a.active ? 'Yes' : 'No'}</td>
                                        <td>{a.dateCreated}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </Layout>
        </>
    )
}

export default SupportAgents;