import { Link, Head } from '@inertiajs/react';
import { useGlitch } from 'react-powerglitch';
import { TypeAnimation } from 'react-type-animation';
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
            <div className='w-screen h-screen bg-black flex flex-col justify-center items-center'>
                <div className='text-white text-[160px] font-extrabold fade-in'><span ref={glitch.ref}><span className='glow'>INFI</span><span className='text-orange-700 glow-orange'>N</span><span className='glow'>ITE</span></span></div>
                <TypeAnimation
                    sequence={[
                        'see you soon 24',
                        1500,
                        'see you soon 23',
                        1500,
                        'see you soon 22',
                        1500,
                        'see you soon 21',
                        1500
                    ]}
                    wrapper="span"
                    speed={20}
                    className='text-white glow'
                    style={{ fontSize: '40px', display: 'inline-block' }}
                    repeat={Infinity}
                    />
            </div>
        </>
    );
}
