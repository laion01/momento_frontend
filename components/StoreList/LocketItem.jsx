export default function LocketItem({ index, data, onClick, typeName}) {
    return (
        <div className="h-[2.5rem] items-center border-b-[2px] hover:bg-[#F5F5F5] flex w-fit text-[0.875rem]"
            onClick={() => {onClick()}}
        >
            <p className="min-w-[2.5rem] text-center"> { index+1 } </p>
            <p className="min-w-[200px] text-left"> { data.name } </p>
            <p className="min-w-[80px] text-right"> { typeName } </p>
        </div>
    )
}