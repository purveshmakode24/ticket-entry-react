import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { STATUS } from '../utils';
import { API_ROOT_URL } from '../config';

export interface Ticket {
    _id: string,
    topic: number,
    description: string,
    dateCreated: string,
    severity: string,
    type: string,
    assignedTo: string,
    status: string,
    resolvedOn: string,
}

const SupportTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await fetch(API_ROOT_URL + 'support-tickets');
                const data = await response.json();
                setTickets(data);
            } catch (err) {
                console.log('Some error occured:', err);
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, []);

    const resolveTicket = async (id: string) => {
        if (window.confirm("Are you sure you want to resolve this ticket?")) {
            const response = await fetch(API_ROOT_URL + `support-tickets/resolve/${id}`, {
                method: 'PUT'
            });
            const data: any = await response.json();
            if (response.ok) {
                // setTickets((tickets: any) => tickets.map((t: Ticket) =>
                //     t._id === id ? { ...t, status: STATUS.RESOLVED, resolvedOn: data.resolvedOn } : t));
                navigate('/support-tickets/');
            } else {
                window.alert('Not able to resolve the ticket at this moment. Please try again after some time.')
            }
        }
    }

    const rowMsgTempalate = (text: string) => {
        return <tr><td colSpan={10} style={{ padding: '10px', background: 'transparent' }}>{text}</td></tr>
    }

    return (
        <>
            <Layout>
                <div className='pt-3 pb-2 mb-3 border-bottom'>
                    <div className='btn-toolbar mb-2 mb-md-8'>
                        <Link to='/support-tickets/create' className='btn btn-primary'>Create +</Link>
                    </div>
                </div>

                <div className="table-responsive" style={{ height: '500px' }}>
                    <table className="table table-striped table-sm" >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Topic</th>
                                <th>Description</th>
                                <th>Date Created</th>
                                <th>Severity</th>
                                <th>Type</th>
                                <th>Assigned To</th>
                                <th>Status</th>
                                <th>Resolved On</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading && (rowMsgTempalate('Loading...'))}
                            {!loading && !tickets.length && (rowMsgTempalate('No tickets available right now.'))}
                            {tickets.map((t: Ticket) => {
                                return (
                                    <tr key={t._id}>
                                        <td>{t._id}</td>
                                        <td>{t.topic}</td>
                                        <td>{t.description}</td>
                                        <td>{t.dateCreated}</td>
                                        <td>{t.severity}</td>
                                        <td>{t.type}</td>
                                        <td>{t.assignedTo || '-'}</td>
                                        <td>{t.status}</td>
                                        <td>{t.resolvedOn || '-'}</td>
                                        <td>
                                            <div className='btn-group mr-2'>
                                                {t.status === 'Resolved' ?
                                                    (<a href="#" className='btn btn-sm btn-outline-secondary disabled'>
                                                        Resolved</a>)
                                                    : (<a href="#" className='btn btn-sm btn-outline-primary'
                                                        onClick={() => resolveTicket(t._id)}>Resolve</a>)
                                                }

                                            </div>
                                        </td>
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

export default SupportTickets;