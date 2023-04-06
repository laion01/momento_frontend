import Image from 'next/image';
import ChatButton from './ChartButton';
import SocialMedia from './SocialMedia';
export default function Footer() {
    return (
        <div className="w-full bg-[#101010] flex flex-col justify-center md:justify-between md:px-[120px] px-[50px] py-[30px] items-center">
            <div className='w-[120px] h-[120px] mb-[20px]'>
                <Image alt='' width={120} height={120}
                    src="/images/minimal.png" />
            </div>

            <div className='flex border-t-[1px] border-t-[white]'>
                <SocialMedia link='https://www.youtube.com/channel/UCUEr3Wrux6PAG6IxiuJI7cg' iconName='youtube'/>
                <SocialMedia link='https://twitter.com/Momento' iconName='twitter'/>
                <SocialMedia link='https://t.me/Momento' iconName='telegram'/>
                <SocialMedia link='https://t.me/Momento_ann' iconName='telegram'/>
                <SocialMedia link='contact@Momento.io' iconName='mail'/>
                <SocialMedia link='https://discord.gg/Momento' iconName='discord'/>
            </div>
            <div className='flex flex-col'>
                <div className='text-xs pt-2 text-[white] text-[0.9rem] leading-[150%] text-center'>
                    Participants/Citizens from the following countries are strictly excluded/not allowed to participate in the IDOs: Algeria, Belarus, Bolivia, Cambodia, Colombia, Ecuador, Egypt, Iran, Iraq, Libya, Morocco, Nepal, Sudan, Syria, Ivory Coast, Zimbabwe, Liberia, Myanmar, North Korea, The Crimea, and or the United States of America (USA), as well as Puerto Rico and the Virgin Islands and any other US possessions (the &quot;Prohibited Jurisdictions&quot;).
                </div>
                <div className='text-xs pt-2 text-[white] text-[0.9rem] leading-[150%] text-center mt-[12px]'>
                    Copyright © 2022 Momento
                </div>
            </div>
        </div>
    )
}