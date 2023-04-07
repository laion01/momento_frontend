import Item from "./Item"

export default function FAQSection() {
    return (
        <div className="mx-[20px] md:mx-[40px] w-[calc(100vw-40px)] md:w-[calc(100vw-80px)] pt-[20px] pb-[80px] flex justify-center">
            <div className="container flex flex-col justify-center relative">
                <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] text-[#AC8118] text-center mt-[100px] mb-[40px]">
                    FAQ
                </h2>
                <div className="flex flex-wrap justify-center items-start">
                    <Item title="What is NFC technology and how does it work?" context="NFC or “near field communication” is a technology built into your smartphone that enables devices to establish radio communication with each other by touching them together. The NFC is activated using the electrical charge from your phone’s battery — when another device is near enough, the coded information is transferred from one device to another. The technology is called “near field” because the emission is weak and the smartphones, or in this case, your smartphone and the Momento™ Digital Locket, must be touching to transmit to each other."/>
                    <Item title="How does the Momento™ Digital Locket work?" context="A tiny NFC chip is embedded into your Momento™ Digital Locket using a patented technology. The NFC chip activates when it comes into contact with your phone’s NFC technology and your precious moment is transferred into the Momento™ Digital Locket using the Galatea Momento™ app. The Galatea Momento™ app is available for download from the Apple Store or Google Apps.
For best results, you may need to remove your phone case. The NFC emission can be very light so for best results, we recommend that you remove your phone case to create the best NFC connection to your Momento™ Digital Locket."/>
                    <Item title="How should I care for my Momento™ Digital Locket?" context="You can care for your locket using the same techniques you’d use for any fine jewelry. The chip is protected within the setting. "/>
                    <Item title="What phones are compatible?" context="Your Momento™ Digital Locket works with any smartphone or tablet that contains an NFC chip including iPhone (7 or later). With Android phones, the NFC must be enabled, which can easily be accomplished in the phone settings."/>
                    <Item title="What kind of memories can I add to the Momento™ Digital Locket?" context="You can commemorate your wedding day, the birth of your child or the precious memories of loved one who’s passed — and keep them close to your heart in a piece of precious jewelry. You can tell any story in your own words and images using voice and text messages, photos and web links. Imagine saving the memories from birth and beyond of your child or grandchild — it’s easy with the Momento™ Digital Locket!"/>
                    <Item title="Can I give a Momento™ Digital Locket as a gift?" context="The Momento™ Digital Locket makes the perfect gift for birthdays, anniversaries, Valentine’s Day, Mother’s Day, graduations — or any time at all! You can even customize your Momento™ Digital Locket on this website or you can do so on your own. Imagine the joy of receiving a gift that holds the personalized memories of life, love and happiness."/>
                    <Item title="Will I be able to add or remove memories?" context="Yes. Using the Galatea Momento™ app, you can upload new memories, delete old ones and decide which message will play first. "/>
                    <Item title="Can I become a reseller?" context="Galatea Jewelry by Artist is always looking for retail jewelers, line reps and wholesalers who are interested in carrying the Momento™ Collection including the Momento™ Digital Locket. Galatea has earned an extraordinary number of patents for its NFC jewelry. From Diamond jewelry to colored stone, pearls and wedding band, no other jewelry company can provide the unique products that has made Galatea an industry leader in NFC fine jewelry. Touched by the hand of the artist, Galatea jewelry offers incomparable merchandise, sales training, complete merchandising and marketing programs and much more. Contact us at our corporate offices T: 1-(909) 592-0877 or email info@galateausa.com"/>
                    <div className="grow w-full max-w-[50%] px-[16px]"></div>
                </div>
            </div>
        </div>
    )
}