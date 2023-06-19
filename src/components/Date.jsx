import React, { useState, useEffect } from 'react';

const DateTimeComponent = () => {
  const [ date, setDate ] = useState('0000년 00월 00일')
  const [ time, setTime ] = useState('00 : 00 : 00')

  // 날짜
  let dt = new Date();
  let month = ((dt.getMonth() + 1) < 9 ? '0' + (dt.getMonth() + 1) : (dt.getMonth() + 1))
  let day = ((dt.getDate()) < 9 ? "0" + (dt.getDate()) : (dt.getDate()))
  let dateFormat = dt.getFullYear() + '년 ' +month + '월 ' + day + "일"
  useEffect(() => {
      setDate(dateFormat)
  }, [])

  // 시간
  let hour = ((dt.getHours()) < 12 ? "오전 " + (dt.getHours()) : "오후 " + (dt.getHours() - 12))
  let min = ((dt.getMinutes()) < 9 ? "0" + (dt.getMinutes()) : (dt.getMinutes()))
  let sec = ((dt.getSeconds()) < 9 ? "0" + (dt.getSeconds()) : (dt.getSeconds()))
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(hour + "시 " + min + "분 " + sec + "초")  
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  })

  return(
    <div className='m-2'>
      <p className='text-xl font-bold'>{date}</p>
      <p className='text-xl font-bold'>{time}</p>
    </div>
  )
}
export default DateTimeComponent;