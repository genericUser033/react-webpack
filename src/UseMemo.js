import React, {useMemo, useRef, useState} from "react";

function UseMemo() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([])

    const nameRef = useRef();

    function handleClick() {
        setProducts([...products, {
            name,
            price: +price
        }])
        setName('');
        setPrice('');
        nameRef.current.focus();
    }

    // const total = products.reduce((result, prod) =>
    //     result + prod.price,
    //     0
    // ) //[].reduce(callback, initialValue)
    // callback: (result, element) => ??? Ex: Total??? result + element?
    // do onChange lam thay doi state => re-render component => recalculate total => waste

    //useEffect || useMemo can both be used to change total
    // but in this case, we dont need to update DOM(side effect)
    // so useMemo is more proper
    const total = useMemo(() => {// Memoizes the result of a function (memoization).
        return products.reduce((result, prod) =>
            result + prod.price,
            0
        )
    }, [products])
    console.log('Re-rendering', total)

    return (
        <div>
            <input
                ref={nameRef}
                type="text"
                placeholder="Enter name..."
                value = {name}
                onChange={e => setName(e.target.value)}
                />
            <br />
            <input
                type="text"
                placeholder="Enter price..."
                value = {price}
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleClick}>Add</button>
            <br />
            <span>Total: {total}</span>
            <ul>
                {products.map((prod, i) => (
                    <li key={i}>{prod.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UseMemo;