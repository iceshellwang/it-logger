import React, { useState, useEffect } from 'react'

const Logs = () => {
    const [logs, setLogs] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getLogs()
        // eslint-disable-next-line
    }, [])
    const getLogs = async () => {
        setLoading(true)
        const res = await fetch('/logs')
        const data = await res.json()
        setLogs(data)
        setLoading(false)
    }
    if (loading) {
        return <h4>Loading...</h4>
    }
    return (

        <ul className='collection-with-header'>
            <li className='collection-header'>
                <h4 className='center'>System Logs</h4>
            </li>
        </ul>
    )
}
export default Logs