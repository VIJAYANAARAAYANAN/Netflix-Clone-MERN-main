import {IoSearch} from 'react-icons/io5'
import {FaRegBell} from 'react-icons/fa6'
import profilePic from '../../assets/img/profile.png'
import {RiArrowDownSFill} from 'react-icons/ri'
import { useState } from 'react'
import { currentUser } from '../../app/user/userSlice'
import { useSelector } from 'react-redux'


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState();
    const currentUsername = useSelector(currentUser)
    console.log('the current username is: ', currentUsername)

    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => window.onscroll = null;
    }

    console.log(isScrolled)
  return (
    <nav className={isScrolled? 'z-[99] bg-gradient-to-t from-transparent  via-[rgba(0,0,0,0.1)] to-transparent w-full top-0 fixed bg-[#141414] text-white h-[70px] items-center flex transition-all ease-in-out duration-700'
    : 'w-full text-white py-0 flex items-center h-[70px] z-[99] fixed top-0 bg-gradient-to-b from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.5)] to-transparent transition-all ease-in-out duration-700' } >
        <div className='w-full flex items-center justify-between px-[60px]'>
            {/* Netflix logo and left part  */}
            <div className='flex flex-row gap-x-3 '>
                {/* Netflix Logo */}
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                    className='h-[25px] mr-[40px]'
                    />
                </div>
                {/* Navigation Pages */}
                <div className="flex items-center flex-row gap-x-5 text-sm ">
                    <a className="flex items-center cursor-pointer text-white font-bold">
                        Home
                    </a>
                    <a className="flex items-center cursor-pointer text-[#E5E5E5] hover:text-white transition-all duration-300 ease-in-out">
                        Tv Shows
                    </a>
                    <a className="flex items-center cursor-pointer text-[#E5E5E5] hover:text-white transition-all duration-300 ease-in-out">
                        Movies
                    </a>
                    <a className="flex items-center cursor-pointer text-[#E5E5E5] hover:text-white transition-all duration-300 ease-in-out">
                        New & Popular
                    </a>
                    <a className="flex items-center cursor-pointer text-[#E5E5E5] hover:text-white transition-all duration-300 ease-in-out">
                        My List
                    </a>
                    <a className="flex items-center cursor-pointer text-[#E5E5E5] hover:text-white transition-all duration-300 ease-in-out">
                        Browse by Languages
                    </a>

                </div>
            </div>

            {/* User tools Right Section*/}
            <div className='flex flex-row gap-x-7 items-center text-white text-[20px]'>
           
                <div className='flex items-center cursor-pointer text-[24px]'>
                    
                    <IoSearch/>
                </div>
                <div className='flex items-center cursor-pointer'>
                    <FaRegBell/>
                </div>
                <div className='h-full overflow-hidden rounded-[5px] flex items-center'>
                    <div className='flex flex-row items-center gap-x-2 cursor-pointer'>
                        <div>
                            <img alt='' className='h-[32px] w-[32px] object-cover' src={profilePic}/>
                        </div>
                        <div className='text-[18px] '>
                            <RiArrowDownSFill/>
                        </div>
                       
                    </div>  
                </div>
            </div>

        </div>




    </nav>
  )
}

export default Navbar