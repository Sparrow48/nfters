import React from 'react'

const NavSearch = () => {
    return (
        <div>
            <div class=" relative mx-auto text-gray-600">
                <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-3xl  text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search" />
                <button type="submit" class="absolute right-0 top-0 mt-2 mr-4">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default NavSearch