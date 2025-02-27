/* eslint-disable no-unused-vars */
import { useState } from "react";
import InputBox from "./components/InputBox";
import CurrencyInfo from "./hooks/CurrencyInfo.js"

function App() {
    const backgroundImage = 'https://images.unsplash.com/photo-1500316124030-4cffa46f10f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const [amount, setAmount] = useState(null)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)
    const color = '#0C3F56';

    const currencyInfo = CurrencyInfo(from);
  
    const options = Object.keys(currencyInfo);
  
    const swap = () => {
      setFrom(to)
      setTo(from)
      setConvertedAmount(amount)
      setAmount(convertedAmount)
    }
    
    const convert = () => {
      setConvertedAmount(amount * currencyInfo[to])
    }
    return (
        <div
            className="w-full h-screen flex flex-wrap bg-cover bg-bottom bg-no-repeat"
            style={{
                backgroundImage: `url('${backgroundImage}')`,
            }}
        >
            
            <div className="w-full my-20">
                <div className="w-full max-w-lg mx-auto border border-gray-60 rounded-lg p-5 
                                backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-5">
                            <InputBox
                                label="From"
                                amount={amount}
                                currOptions={options}
                                SelectCurr={from}
                                onCurrChange={(currency)=> setFrom(currency)}
                                onAmountChange={(amount)=> setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#062635] rounded-md bg-[#0c3f56a6] hover:bg-[#0c3f56] text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-4 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currOptions={options}
                                SelectCurr={to}
                                onCurrChange={(currency)=> setTo(currency)}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-[#0c3f56a6] hover:bg-[#0c3f56] text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default App;



