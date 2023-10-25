import { FormEvent } from 'react';
import './App.css'

function App() {
  // TODO: add keyboard navigation here

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    // TODO: implement form data saving to local storage

  }

  return (
    <div className='mx-auto max-w-screen-lg min-h-screen flex flex-col md:flex-row items-center justify-center'>
      <div>
        <img src='/tatem-logo.png' className='w-8 h-8 mb-2 mx-auto' />
        <h1 className='text-3xl text-center mb-4'>Tatem Inputs</h1>
        <div className='my-3'>
          Submitted form inputs:
          {/* TODO: display submitted input data here */}
        </div>
      </div>
      <form className="flex mx-auto max-w-2xl flex-col items-center gap-3" onSubmit={(e) => submitForm(e)}>
        <label className='flex flex-col items-start w-full gap-1'>
          <span className='text-xs text-left text-gray-700'>First Name</span>
          <input className='w-full rounded border border-gray-100 px-3 py-1' />
        </label>
        <label className='flex flex-col items-start w-full gap-1'>
          <span className='text-xs text-gray-700'>Last Name</span>
          <input className='w-full rounded border border-gray-100 px-3 py-1' />
        </label>
        <label className='flex flex-col items-start w-full gap-1'>
          <span className='text-xs text-gray-700'>Email</span>
          <input className='w-full rounded border border-gray-100 px-3 py-1' />
        </label>
        <label className='flex flex-col items-start w-full gap-1'>
          <span className='text-xs text-gray-700'>Password</span>
          <input type='password' className='w-full rounded border border-gray-100 px-3 py-1' />
        </label>
        <button className='mt-2 border rounded px-2 py-0.5 hover:cursor-pointer border-black hover:bg-black hover:text-white duration-150' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
