

export default function Item({name, quantity, category, onSelect }){
    return (
        <li className="p-2 m-4 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer" onClick={() => onSelect(name)}>
            <h2 className="text-xl font-bold">{name}</h2>
            <h2 className="text-sm">Buy {quantity} in {category}</h2>
        </li>
    );
}