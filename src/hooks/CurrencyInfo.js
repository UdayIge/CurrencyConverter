import { useState, useEffect } from 'react'

function CurrencyInfo(currency="usd") {
    const [data, setData] = useState({});
    
    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data[currency]));
    }, [currency]);
    
    return data;
}

export default CurrencyInfo;