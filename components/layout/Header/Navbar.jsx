import NavItem from "./NavItem"

export default function Navbar({className}) {
    return (
        <div className={className}>
            <NavItem link='/about' target='_self' label='About Us'/>
            <NavItem link='/lockets' target='_self' label='Lockets'/>
            {/* <NavItem link='#games' target='_self' label='Marketplace'/> */}
            {/* <NavItem link='https://docs.google.com/presentation/d/1n33uTwCbqi3RnSLIxhGcTiK0ccQCH4klerCywgxUIS4/edit' target='_blank' label='Pitch deck'/>
            <NavItem link='https://meta-xseed.gitbook.io/Momento-games-studio-usdxseed/' target='_blank' label='WhitePaper'/>
            <NavItem link='#team' target='_self' label='Roadmap'/> */}
        </div>
    )
}