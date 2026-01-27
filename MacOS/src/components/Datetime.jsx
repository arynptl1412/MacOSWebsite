import React, { useEffect, useState } from 'react'

const formatDate = (date) => {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const w = weekdays[date.getDay()]
    const m = months[date.getMonth()]
    const d = date.getDate()
    let h = date.getHours()
    const minute = date.getMinutes().toString().padStart(2, '0')
    // convert to 12-hour format without AM/PM (matches example)
    return `${w} ${m} ${d} ${h}:${minute}`
}

const Datetime = () => {
    const [now, setNow] = useState(() => formatDate(new Date()))

    useEffect(() => {
        const tick = () => setNow(formatDate(new Date()))
        const id = setInterval(tick, 1000)
        return () => clearInterval(id)
    }, [])

    return <div>{now}</div>
}

export default Datetime