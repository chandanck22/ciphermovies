import { useEffect } from "react";
import { Link } from "react-router-dom";


export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          {/* <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p> */}
          <div className="max-w-lg">
            <img className="rounded" src="https://img.freepik.com/free-vector/404-error-with-people-holding-numbers-concept-illustration_114360-7923.jpg?w=996&t=st=1709307771~exp=1709308371~hmac=a867a8995f141459b2603010f210a591f550a581e53c59bf66025264a22df9a7" alt="404 Page Not Found" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="w-64 text-xl bg-blue-500 rounded p-2 font-medium" >Back To Home</button>
          </Link>          
        </div>
      </section>
    </main>
  )
}
