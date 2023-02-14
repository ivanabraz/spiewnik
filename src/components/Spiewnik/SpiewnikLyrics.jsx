import React from 'react';

const SpiewnikLyrics = ({ piosenka }) => {

    return (
        <>
        <div className={`w-full h-[100%] min-h-screen bg-neutral-4 flex justify-center`}>
            <div className='py-20'>
                <h2 className="text-4xl text-white mb-10 mt-10">
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