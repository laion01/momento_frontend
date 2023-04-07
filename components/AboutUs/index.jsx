import Image from "next/image"
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

export default function AboutUs() {
    return (
        <div className="mx-[20px] md:mx-[40px] w-[calc(100vw-40px)] md:w-[calc(100vw-80px)] bg-[#F5F5F5] flex justify-center pt-[20px]">
            <div className="container flex flex-col justify-center items-center relative">
                <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] text-[#AC8118] text-center mt-[100px]">
                    About Us
                </h2>
                <p className="text-[1.5rem] leading-[2.25rem] text-center text-[#747067] leading-[2.25rem] mb-[3rem]"> 
                    By Galatea Jewelry by Artist
                </p>
                <div className="flex flex-col md:flex-row justify-center mb-[3rem]">
                    
                    <div className="mr-[0px] md:mr-[40px]">
                        <Image alt="" width={436} height={523} src="/images/aboutus.jpg"/>
                    </div>
                    <div className="w-full max-w-[406px] flex flex-col justify-center items-start mr-[0px] md:ml-[40px]">
                        <h3 className="text-[#747067] text-[1.5rem] leading-[2.25rem] mb-[2rem] font-bold"> Momento was invented by Chi Huynh </h3>
                        <p className="text-[#747067] text-[1.125rem] leading-[2.25rem] mb-[2rem]">
                            an award-winning jewelry designer with over 25 years of experience in the business of jewelry ideas and creations. He has won several awards in the jewelry industry and many other accolades in other fields of invention and art.
                        </p>
                        <div className="w-full max-w-[591px] flex flex-col justify-center">
                            <div className="flex items-start mb-[16px] items-center">
                                <div className="min-w-[4px] h-[4px] rounded-full bg-[#747067] my-[12px] mr-[10px]"> </div>
                                <p className="text-[#747067] text-[1rem] leading-[27px]">
                                    JCK Jeweler Choice Award
                                </p>
                            </div>
                            <div className="flex items-start mb-[16px]">
                                <div className="min-w-[4px] h-[4px] rounded-full bg-[#747067] my-[12px] mr-[10px]"> </div>
                                <p className="text-[#747067] text-[1rem] leading-[27px]">
                                    In-Store Magazine Award
                                </p>
                            </div>
                            <div className="flex items-start mb-[16px]">
                                <div className="min-w-[4px] h-[4px] rounded-full bg-[#747067] my-[12px] mr-[10px]"> </div>
                                <p className="text-[#747067] text-[1rem] leading-[27px]">
                                    Culture Pearl Association of America’s Visionary Award
                                </p>
                            </div>
                            <div className="flex items-start mb-[16px]">
                                <div className="min-w-[4px] h-[4px] rounded-full bg-[#747067] my-[12px] mr-[10px]"> </div>
                                <p className="text-[#747067] text-[1rem] leading-[27px]">
                                    JDF Momento Collection is a subsidiary of Galatea Jewelry corp. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="text-[2rem] md:text-[4rem] lg:text-[5rem] text-[#AC8118] text-center">
                    Chi Huynh’s Story
                </h2>
                <div className="lg:w-[969px] mb-[5rem] mx-[40px]">
                    <div className="mt-[5rem] mb-[3.5rem]">
                        <Image alt="" width={969} height={523} src="/images/document.jpg"/>
                    </div>
                    <p className="text-[1rem] leading-[1.6875rem]">
                        When I was 12-years old, my mother held my hand, walked me down the dirt road into the dark and said to me. Tonight I am going to take boat, and this boat will take you to a new land with hope for a brighter future. I cannot come with you now but when you arrive there, your k will be waiting for you, and I will see you soon, understand?* When you are 12-years old, you trust whatever your mother says to you. That ni found myself on a tiny boat that carried 45 people. We were all leaving Vietnam illegally. The night was dark and rainy, and the thunderous v the ocean were beating our boat with a violent, angry voice that terrifed me. This went on for quite a few hours when suddenly the boats en stopped. Burnt out and broken. it left us adrift in the vast and stormy sea. Now facing the greatest fear that anyone sailing the ocean can fac only hope was for a fisherman or another commercial boat to rescue us. But there was no one in sight. I had never been so scared, so I starte pray. I prayed to God., Jesus. Buddha, my ancestors and anyone else I could think of. *Please don't let me die in this ocean. I want to live. Sev days went by, and no one's prayers were answered. We ran out of food and water. I had never been so thirsty. At times. I was so thirsty. I woul myself, "I wish I could have a cold glass of water and drink it, and then you can put a gun to my head and kill me: <br/><br/>
                        I would have taken that glass of water, and I would have died happy The hunger, the thirst. the hopelessness caused me to think of someone I blame for my suffering. But there was no one to blame, so I blamed God for being cruel to me. "I have done nothing to deserve this punishme said to myself, There is no God. God would not do this to me. I am just a boy If God existed, He would come and rescue me Where is He?t A days later, all we had left was the last teaspoon of water to share among myself, two brothers and two other sisters. We even drank our own ur and the bitter ocean water. Then one morning. we saw a big boat on the horizon. Our first sight of hope! We took off our clothes and created af get their attention. I cannot describe how excited we were when we saw them coming our way. They took us on their big boat, gave us water to and fed us. We were happy.<br/><br/>
                        The next morning. we realized that they had onty taken us up on their boat so that they could take everything of value from us. They gave us wa to drink and let us shower, only to steal our jewelry, gold and any other valuables we'd brought with us in the hopes of starting a new life. Yes, the were professional pirates. They were only looking to prey on desperate people who had brought their life's possessions with them. To their eyes. were nothing more than a floating bank They took what they wanted and set us adrift on our boat once again. As the days went by. we realized t were more pirate ships, and eventually we would have nothing left for them to take. The sight of a boat coming our way was no longer a beacon hope but a vision of fear. Eventually, I realized, This is it I'm going to die in this ocean. I have no more hope. All I have is acceptance of the fact tha will die Then. I jumped into the ocean to swim among the fishes.I figured I would have a good bath and enjoy the few minutes I had left to live. I realized I was no longer afraid to die once I had accepted it as fact. I was already dead. By facing death, I had lost both my hope and my fear. Ther suddenly. it started to rain! With nothing left to drink on our boat, the heavens decided to dump water all over us, which meant we could all live a few more days. We had been drifting for 13 days now. I could feel my bones showing up through my body - bones I had not known were there before.<br/><br/>
                        My shorts were starting to fall from my waist, and I had to tie a knot to keep them on. But I was no longer afraid. One strange morning. we woke up surprised to see a small fishing boat coming very close to us. The captain of this boat called out. "Do you want to die here? The current in this regior of the sea moves in a circular motion. It will take you nowhere We had been wondering why we had drifted for so long and never found land. The captain continued, "Let me take you out of here: And he kept his word. He towed us to Thailand and asked for nothing in return. He did not even want to give us his name. After 18 days at sea, I saw the shore in the distance. Hope was here again. The most beautiful thing I saw that morning was dirt. Yes, dirt! I knelt down, grasped a handful of it and kissed the ground I took a deep breath, and I realized that just being able to breathe this air and walk on this dirt - this Earth - is the greatest gift of life. From that day on I just want to bring beauty into the world.<br/><br/>
                    </p>
                    <p  className="text-[1rem] leading-[1.6875rem]">
                        - Patent by Chi Huynh, PT NO. <span className="text-[#4C69FF] border-b-[1px] border-b-[#4C69FF]">https://patents.google.com/patent/US20190122010A1</span> <span className="text-[#4C69FF] border-b-[1px] border-b-[#4C69FF]">https://patents.google.com/patent/US10108900B2</span> and 5 other utility patent. Contact us for more info.
                    </p>
                </div>
            </div>
        </div>
    )
}