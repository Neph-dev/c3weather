import React, { useState, useEffect } from 'react'

import '../App.css'


const TimeAndDate = () => {

    let monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December']
    let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
        'Saturday']


    // Manage date and time.
    let fullDate = new Date()

    const time = fullDate.toLocaleTimeString({ hour: 'numeric', hour12: false, minute: 'numeric' })
    let currentMinutes = fullDate.getMinutes()
    let currentSeconds = fullDate.getSeconds()

    const [minutes, setMinutes] = useState(currentMinutes)
    const [seconds, setSeconds] = useState(currentSeconds)
    const [currentDate, setCurrentDate] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setSeconds((seconds) => seconds + 1)
            setMinutes((minutes) => minutes + 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    })

    useEffect(() => {
        let date = new Date().getDate() //Current Date
        let month = monthNames[new Date().getMonth()] //Current Month
        let day = dayNames[new Date().getDay()]//Current day
        setCurrentDate(`${day} | ${month} ${date}`)
    }, [])


    return (
        <div className='time-and-date'>
            <div className='time'>
                {time}
            </div>
            <div className='date'>
                {currentDate}
            </div>
        </div>
    )
}

export default TimeAndDate
