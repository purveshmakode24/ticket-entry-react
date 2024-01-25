import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom';
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

    const rowMsgTempalate = (text: string) => {
        return <tr><td colSpan={10} style={{ padding: '10px', background: 'transparent' }}>{text}</td></tr>
    }

    return (
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
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default SupportTickets;