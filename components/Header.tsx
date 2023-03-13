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
                    src="https://cdn.sanity.io/images/l2bsu0a5/production/f1e34902f13ccc4d354ac220a025518644b2021c-400x400.png?w=2000&fit=max&auto=format"
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

        </div>

        <div className="flex items-center space-x-2">

        <Link
            href="/post/getting-started-or-the-objective-of-creating-this-blog"
          >
            <h1>
              About
            </h1>
          </Link>

          <Link 
            href="https://github.com/manticorevault"
            className="
              px-5
              py-3
              text-sm
              md: text-base
              bg: gray-900
              text-[#EFE335]
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