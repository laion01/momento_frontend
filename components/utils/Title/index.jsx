export default function Title({ title, subtitle, type }) {
    return (
        <>
            <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[6.75rem] text-[#AC8118] text-center mt-[100px] mb-[3rem]">
                { title }
            </h2>
            { subtitle.length > 0 &&
                <p className="text-[#747067] text-[1rem] leading-[1.16875rem] mb-[3rem]"> By Galatea Jewelry by Artist </p>
            }
        </>
        
    )
}