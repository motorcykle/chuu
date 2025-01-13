"use client"

export default function Page () {
  
  const data = JSON.parse(sessionStorage?.getItem('data'));

  return <div>
    {data}
  </div>
}