export default function ProductItem({ index, data}) {
    return (
        <div className="h-[2.5rem] items-center border-b-[2px] hover:bg-[#F5F5F5] flex w-fit text-[0.875rem]">
            <p className="min-w-[2.5rem] text-center"> 1 </p>
            <p className="min-w-[200px] text-left"> Pearl Flower </p>
            <p className="min-w-[80px] text-right"> Type 1 </p>
        </div>
    )
}