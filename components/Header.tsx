import React from 'react'
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="
                    flex 
                    items-center 
                    justify-between 
                    space-x-2
                    font-bold
                    px-10
                    py-5
                    ">
        <div className="flex items-center space-x-2">
            <Link href="/">
                <Image 
                    src="https://media.tenor.com/jMdv7eVShFoAAAAC/squirrel-pixel.gif"
                    width={ 50 }
                    className="rounded-full"
                    height={ 50 }
                    alt="logo" 
                />
            </Link>
            <h1> 
              The Rusty Code
            </h1>
        </div>

        <div>
          <Link 
            href="https://github.com/manticorevault"
            className="
              px-5
              py-3
              text-sm
              md: text-base
              bg: gray-900
              text-[#F7AB0A]
              flex
              items-center
              rounded-full
              text-center
            "
          >
            <Image
              src="https://media.licdn.com/dms/image/C5616AQE2g7mDLd3Qlg/profile-displaybackgroundimage-shrink_350_1400/0/1614910181892?e=1681344000&v=beta&t=RBRC5ueF2nKutW03wyCj2GzCVDZ0TY-b7pmldZQbRH8"
              width={ 150 }
              height={ 150 }
              className="rounded-full"
              alt="Github-Banner"
            />
          </Link>

        </div>
    </header>


  )
}

export default Header