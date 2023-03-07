import React from 'react'
import Image from "next/image";

function Logo(props: any) {

    const { renderDefault, title } = props;

    return (
        <div
            className="flex items-center space-x-2"
        >
            <Image 
                className="rounded-full object-cover"
                height={ 50 }
                width={ 50 }
                src="https://cdn.sanity.io/images/l2bsu0a5/production/f1e34902f13ccc4d354ac220a025518644b2021c-400x400.png?w=2000&fit=max&auto=format"
                alt="logo"
            />

            <>
                { renderDefault(props) } 
            </>
        </div>
    )
}

export default Logo