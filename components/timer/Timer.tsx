'use client';

// Import React dan Hook terkait
import React, { useState, useEffect } from 'react';

// Interface untuk tipe state waktu
interface CountdownState {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

// Komponen Countdown
const Timer: React.FC = () => {
    // State untuk menyimpan waktu
    const [countdown, setCountdown] = useState<CountdownState>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Tanggal target countdown (ganti dengan tanggal yang diinginkan)
    const targetDate = new Date('2024-02-25T00:00:00');

    // Fungsi untuk menghitung waktu tersisa
    const calculateTimeLeft = (): CountdownState => {
        const difference = targetDate.getTime() - new Date().getTime();
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    // Efek samping untuk memperbarui waktu setiap detik
    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(calculateTimeLeft());
        }, 1000);

        // Membersihkan interval setelah komponen tidak lagi digunakan
        return () => clearInterval(timer);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Render komponen countdown
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 text-center text-white'>
            <div className='flex flex-col bg-black/20 w-full py-6 px-8 rounded-xl gap-2'>
                <div className='text-3xl font-bold'>{countdown.days}</div>
                <div className='text-sm text-white/70'>Days</div>
            </div>
            <div className='flex flex-col bg-black/20 w-full py-6 px-8 rounded-xl gap-2'>
                <div className='text-3xl font-bold'>{countdown.hours}</div>
                <div className='text-sm text-white/70'>Hours</div>
            </div>
            <div className='flex flex-col bg-black/20 w-full py-6 px-8 rounded-xl gap-2'>
                <div className='text-3xl font-bold'>{countdown.minutes}</div>
                <div className='text-sm text-white/70'>Minutes</div>
            </div>
            <div className='flex flex-col bg-black/20 w-full py-6 px-8 rounded-xl gap-2'>
                <div className='text-3xl font-bold'>{countdown.seconds}</div>
                <div className='text-sm text-white/70'>Second left</div>
            </div>
        </div>
    );
};

export default Timer;
