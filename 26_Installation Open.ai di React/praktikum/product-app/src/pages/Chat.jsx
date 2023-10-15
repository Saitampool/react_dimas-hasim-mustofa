/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import {OpenAIApi, Configuration} from 'openai' 

import Navbar from '../components/Navbar'

function Chat() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResult = async () => {
    setLoading(true);
    await openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 100,
      })
      .then((response) => {
        setResult(response.data.choices[0].text);
      })
      .catch ((error) => {
        console.log(error)
      }) 
      setLoading(false);
  };

  return (
    <>
      <Navbar/>
      <section className="flex flex-col justify-center items-center w-screen h-screen bg-[#37517E]">
        <div className='flex gap-x-5'>
          <div className='w-60'>
            <input
            placeholder='type input here...'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="p-3 w-60 h-10 rounded-md bg-white border border-blue-500 focus:outline-none"
            />
          </div>
          <div className='w-20 h-10 flex items-center justify-center'>
            <button
              onClick={() => handleResult()}
              className='bg-blue-400 hover:bg-blue-600 text-white font-normal text-sm py-2 px-4 rounded-md'>
              Click
            </button>
          </div>
        </div>
        <div className='w-80 h-60 mt-5'>
          <textarea
            value={result}
            placeholder={loading ? "Please wait, your prompt is in progress" : ""}
            onChange={(e) => setResult(e.target.value)}
            className= {`p-3 w-full h-full rounded-md bg-white border ${loading ? 'border-blue-500' : 'border-blue-300'} focus:outline-none {}`}
            
          />
          
        </div>
    </section>
    </>
  )
}

export default Chat