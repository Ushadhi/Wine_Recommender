

import { useNavigate } from 'react-router-dom'

export default function LandingPageComponent() {
  let navigate = useNavigate()


  const handleClick = () => {
    navigate("/questionnaire")
  }

  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute h-screen inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="w-full  mx-auto ">
            <div className="relative shadow-xl h-screen  sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
              </div>
              <div className="relative px-4 h-screen py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Thank you </span>
                  <span className="block text-indigo-200">for participating in the survery!</span>
                </h1>
                
              </div>
            </div>
          </div>
        </div>

       
      </main>

     
    </div>
  )
}
