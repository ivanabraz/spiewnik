import React from 'react';

const SpiewnikLyrics = ({ piosenka }) => {

    return (
        <>
        <div className={`bg-black absolute z-100 flex flex-col top-0 items-center text-center w-full h-screen
            text-xl p-10`}>
            <div className='w-[50%]'>
                <h2 className="text-2xl text-white mb-10">
                    {piosenka.title}
                </h2>
                <p className="text-base text-white" dangerouslySetInnerHTML={{ __html: piosenka.lyrics }}>
                    
                </p>
            </div>
        </div>
        </>
    )
}


export default SpiewnikLyrics;