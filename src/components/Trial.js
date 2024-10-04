import React from 'react'
import Button from './supportComponents/Button'

const Trial = () => {
  return (
    <div className='text-center bg-slate-100 my-5'>
        <h1 className="text-3xl pt-28 pb-5 text-primary">

        Start your free trial
        </h1>
        <p lassName="text-gray-500  text-md">
        Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="flex flex-col py-7 sm:flex-row justify-center items-center align-middle gap-5 mt-4">
        <Button
          content="Demo"
          className="w-full sm:w-auto hover:bg-gray-200 transition duration-150"
        />
        <Button
          className="w-full sm:w-auto bg-violet-700 text-white hover:bg-violet-600 transition duration-150"
          content={"Sign up"}
        />
      </div>
    </div>

  )
}

export default Trial