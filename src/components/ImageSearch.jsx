import React, {useState, useRef} from 'react';

const ImageSearch = ({searchTerm}) => {

  // const [text, setText] = useState('');

  const searchValue = useRef('');

  // const handleChange = (e) => {

  //   setTerm(e.target.value)
  // }

  const handleSubmit = (e) => {  
    e.preventDefault();
    searchTerm(searchValue.current.value)
    console.log(searchValue.current.value)
  }

  return (
    <div>
       <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            <div className="flex items-center border-b border-teal-500 py-2">
              <input ref={searchValue} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
              {/* <input onChange={(e) => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." /> */}
              <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit"> Search </button>
        </div>
      </form>
    </div>
  )
}

export default ImageSearch
