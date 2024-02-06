import Link from "next/link";
import Item from "./item";
import ItemList from "./item-list";


export default function Page() {
    return (
      <main class>
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <ItemList></ItemList>
      </main>
    );
}