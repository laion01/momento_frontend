export default function MetalItem({ index, data, onClick}) {
    return (
        <div className="h-[2.5rem] items-center border-b-[2px] hover:bg-[#F5F5F5] flex w-full text-[0.875rem]"
            onClick={() => {onClick()}}
        >
            <p className="min-w-[2.5rem] text-center"> {index+1} </p>
            <p className="grow text-left"> {data.name} </p>
        </div>
    )
}