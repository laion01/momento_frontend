import Image from "next/image"

export default function ColorItem({ index, data, onClick}) {
    return (
        <div className="h-[2.5rem] items-center border-b-[2px] hover:bg-[#F5F5F5] flex w-full text-[0.875rem]"
            onClick={() => { onClick()}}
        >
            <p className="min-w-[2.5rem] text-center"> { index } </p>
            <p className="min-w-[200px] grow text-left"> { data.name } </p>
            <div className="w-[60px] flex justify-center items-center">
                <Image alt={24} width={24} height={24} src={data.image} />
            </div>
        </div>
    )
}