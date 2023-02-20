import React from 'react';

const SpiewnikLyrics = ({ piosenka }) => {

    return (
        <>
        <div className={`w-full h-[100%] min-h-screen flex justify-start xs:justify-start sm:justify-start md:justify-center lg:justify-center
        `}>
            <div className='py-20'>
                <h2 className="text-4xl mb-10 mt-10 text-wrap" dangerouslySetInnerHTML={{ __html: piosenka.title }}>
                    
                </h2>
                <p className="text-base" dangerouslySetInnerHTML={{ __html: piosenka.lyrics }}>
                </p>
            </div>
        </div>
        </>
    )
}


export default SpiewnikLyrics;