import Image from 'next/image';
import ChatButton from './ChartButton';
import SocialMedia from './SocialMedia';
export default function Footer() {
    return (
        <div className="w-full bg-white flex flex-col sm:flex-row justify-center sm:justify-between items-center px-[2.5rem] py-[1.5rem]">
            <p className='text-[1rem] text-[#747067] grow'> © Galatea Jewelry by Artist. 2022. </p>

            <div className='flex items-center'>
                <SocialMedia link='https://www.youtube.com/channel/UCUEr3Wrux6PAG6IxiuJI7cg' iconName='youtube'/>
                <SocialMedia link='https://twitter.com/Momento' iconName='twitter'/>
                <SocialMedia link='https://t.me/Momento' iconName='telegram'/>
                <SocialMedia link='contact@Momento.io' iconName='mail'/>
                <SocialMedia link='https://discord.gg/Momento' iconName='discord'/>
            </div>
        </div>
    )
}