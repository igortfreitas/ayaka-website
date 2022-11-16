import Image from 'next/image'
import Background from '../public/Ayaka.jpg'
export default function BackgroundImg() {
    return (
<div style={{
            zIndex: -1,
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            filter: 'brightness(0.3)'
        }}>
            <Image 
                src={Background} 
                alt="Ayaka" 
                layout="fill" 
                objectFit="cover" 
                objectPosition='center'
            ></Image></div>
    )
}