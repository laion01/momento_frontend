export default function TabItem({id, label, selectedItem, selectItem}) {
    return (
        <button className={"whitespace-nowrap md:w-full  px-[30px] text-[1rem] text-left leading-[1.6875rem] pt-[1.25rem] pb-[0.625rem] md:pb-[1.25rem] border-b-[1px] border-primary md:border-[#D4D4D4]" + (id==selectedItem ? " border-b-[4px] md:border-b-[1px]" : "")} style={{
            fontWeight: id==selectedItem ? 600 : 400, color : id == selectedItem ? "#996D01" : "#AAA599"
        }} onClick={() => {selectItem(id)}}>
            { label }
        </button>
    )
}