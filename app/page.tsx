import Timer from '@/components/timer/Timer';
import Image from 'next/image';

export default function Home() {
    return (
        <div className='bg-photos bg-cover bg-center'>
            <div className='backdrop-blur-sm'>
                <div className='container flex flex-col h-screen w-screen selection:bg-red-300 selection:text-red-900'>
                    <div className='flex flex-col justify-center items-center h-full'>
                        <div className='w-32 mb-5'>
                            <Image
                                src='/logo.png'
                                width={500}
                                height={500}
                                alt='AKAI Logo'
                                priority
                            />
                        </div>
                        <div className='text-3xl md:text-4xl lg:text-6xl text-center text-white font-black py-5 uppercase drop-shadow-md'>
                            {`We're Launching Soon`}
                        </div>
                        <p className='text-sm lg:text-base text-center text-white/70'>
                            {`We're creating something exciting in the house and about
                        to launch soon.`}
                        </p>
                        <p className='text-sm lg:text-base text-center text-white/70'>
                            Thank you so much for your interest.
                        </p>
                    </div>
                    <div className='flex text-white text-center items-center justify-center py-5 drop-shadow'>
                        © 2024 AKAI Car Audio. All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    );
}
