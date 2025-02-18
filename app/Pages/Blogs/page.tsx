import React from 'react'

// const blogData = [
//   {
//     id:1,
//     title: 'The Future of Web Development',
//     date: '2021-09-01',
//   },
//   {
//     id:2,
//     title: 'The Future of Web Development',
//     date: '2021-09-01',
//   },
//   {
//     id:3,
//     title: 'The Future of Web Development',
//     date: '2021-09-01',
//   }
// ]

const page = () => {
  return (
    <>
    <section className='h-screen text-white pt-28 text-center flex flex-col justify-center items-center'>
      
      {/* {blogData.map((blog, index) => (
       
       <div key={index}>
          <h1>{blog.title}</h1>
          <p>{blog.date}</p>
       </div>
      ))}
     */}
  <h1 className='font-Noto font-bold text-6xl'>404</h1>
     <h1 className='text-2xl'>Not Found</h1>
    </section>
    </>
  )
}

export default page