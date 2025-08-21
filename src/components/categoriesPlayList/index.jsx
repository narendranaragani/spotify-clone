import React from 'react'
import { useNavigate } from 'react-router'

const CategoryPlayList = ({categoryLists}) => {
  const navigate=useNavigate();
  return (
    <>
      <div className="min-h-screen p-5">
            <h1 className="text-[#FFFFFF] font-bold text-xl mb-5">Genres & Moods</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categoryLists.map((categoryplaylist) => (
                <div key={categoryplaylist.id} className="bg-[#242424] p-3 rounded-lg" onClick={()=>{navigate(`/categorylist/${categoryplaylist.id}`);}}>
                  <img className="rounded-lg mb-2 cursor-pointer" src={categoryplaylist.icons[0]?.url} alt={categoryplaylist.name} />
                  <p className="text-sm text-gray-400 font-semibold">{categoryplaylist.name}</p>
                </div>
              ))}
            </div>
          </div>
    </>
  )
}

export default CategoryPlayList
