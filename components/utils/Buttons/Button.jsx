export default function Button({label, disabled, onClick}) {
    return (
        <button className="mx-[0.25rem] h-[3rem] rounded-full disabled:bg-[#BCB9B3] bg-[#996D01] hover:px-[1.675rem] px-[1.5rem] text-white text-[1rem] hover:shadow transition-all duration-300" disabled={disabled} onClick={(e) => { onClick(e)}}> {label} </button>
    )
}