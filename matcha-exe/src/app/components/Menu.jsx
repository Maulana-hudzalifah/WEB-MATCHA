import MenuCard  from "./MenuCard";

const ITEMS = [
    {name:"Matcha Brown Sugar", desc: " perpaduan matcha dan gula aren", price: 12000, img:""},
    {name:"Matcha Straw", desc: "Matcha dengan paduan Stawberry", price:15000, img:""},
]


export default function Menu() {
    return (
    <section className="menu-section" id="menu">
        <h2 className="section-title">Menu Unggulan</h2>
        <div className="menu-grid">
            {ITEMS.map((item )=>(<MenuCard key={item.name}{...item}/>))}
        </div>
    </section>
    );
}
