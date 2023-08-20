'use client'

import { JSX, useEffect, useState } from 'react'

/**
 * Displays the time along with the
 * date and day.
 */
export default function Time(): JSX.Element {
	const [date, setDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()))
        return () => clearInterval(interval)
    }, [])

	return (
		<div className='flex flex-col gap-2 text-2xl items-end'>
			<span className="text-blue">{getDay(date)}</span>
			<span>{getDate(date)}</span>
            <span className="text-blue">{getTime(date)}</span>
		</div>
	)
}

/**
 * Returns the weekday from `date`.
 *
 * @param date `Date` object
 * @returns weekday
 */
function getDay(date: Date): string {
	const options: Intl.DateTimeFormatOptions = { weekday: 'long' } as const
	const dateTimeFormat = new Intl.DateTimeFormat('en-US', options)
	return dateTimeFormat.format(date)
}

/**
 * Returns the date from `date`.
 *
 * Example: July 12, 2023.
 *
 * @param date `Date` object
 * @returns date
 */
function getDate(date: Date): string {
	const options: Intl.DateTimeFormatOptions = {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	} as const
	const dateTimeFormat = new Intl.DateTimeFormat('en-US', options)
	return dateTimeFormat.format()
}

/**
 * Returns the time from `date`.
 *
 * Example: 9:19:23 where 9 is the hours,
 * 19 is the minutes, and 23 is the seconds.
 *
 * @param date `Date` object
 * @returns time
 */
function getTime(date: Date): string {
	const options: Intl.DateTimeFormatOptions = {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	} as const
    const dateTimeFormat = new Intl.DateTimeFormat('en-US', options)
    return dateTimeFormat.format()
}
