export default function Item(props) {
    return (
        <ul>
            <li className="p-2 m-4 bg-slate-900 max-w-sm" onClick={props.onSelect}>
                <h2 className="text-xl font-bold">{props.name}</h2>
                <div className="text-sm">
                    <p>Buy {props.quantity} in {props.category}</p>
                </div>
            </li>
        </ul>
    );
}