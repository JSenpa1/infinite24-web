import { Link, Head } from '@inertiajs/react';
import { useGlitch } from 'react-powerglitch'
import '../../css/app.css';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    const glitch = useGlitch();

    return (
        <>
            <div className='h-screen w-screen bg-black'>
                <div className='flex h-screen justify-center items-center text-white text-[160px] font-extrabold'><span ref={glitch.ref}><span className='glow'>INFI</span><span className='text-orange-700 glow-orange'>N</span><span className='glow'>ITE</span></span></div>
            </div>
        </>
    );
}
