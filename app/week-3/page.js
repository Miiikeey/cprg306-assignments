import ItemList from './item-list.js';


export default function Page() {
  return (
    <main>
        <h2 className="text-3xl font-bold m-2">Shopping List</h2>
        <ItemList />
    </main>
  );
}