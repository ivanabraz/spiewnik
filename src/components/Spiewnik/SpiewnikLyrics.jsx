import React from 'react';

const SpiewnikLyrics = ({ piosenka }) => {

    return (
        <>
        <div className={`w-full h-[100%] min-h-screen bg-neutral-200 dark:bg-neutral-800 flex justify-center text-neutral-900 dark:text-white`}>
            <div className='py-20'>
                <h2 className="text-4xl  mb-10 mt-10">
                    {piosenka.title}
                </h2>
                <p className="text-base " dangerouslySetInnerHTML={{ __html: piosenka.lyrics }}>
                </p>
            </div>
        </div>
        </>
    )
}


export default SpiewnikLyrics;