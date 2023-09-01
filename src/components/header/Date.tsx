'use client'

// Moment
import moment from 'moment'

// React
import { useState, useEffect } from 'react'

/**
 * Displays the time along with the
 * date and day.
 *
 * @returns `Time` component
 */
export default function Time() {
	const [{ weekDay, date, time }, setDate] = useState(getCurrentDate())

	useEffect(() => {
		const interval = setInterval(() => setDate(getCurrentDate()), 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<time className='flex flex-col gap-2 text-2xl items-end'>
			<span className='text-main-blue'>{weekDay}</span>
			<span>{date}</span>
			<span className='text-main-blue'>{time}</span>
		</time>
	)
}

/**
 * Returns the current date using `moment`.
 *
 * Example:
 * `weekDay`: Friday
 * `date`: September 18, 2023
 * `time`: 2:34:45 PM
 *
 * @returns current date
 */
function getCurrentDate() {
	return {
		weekDay: moment().format('dddd'),
		date: moment().format('MMMM Do, YYYY'),
		time: moment().format('h:mm:ss A')
	}
}
