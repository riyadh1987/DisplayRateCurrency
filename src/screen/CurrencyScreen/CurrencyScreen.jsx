import axios from 'axios';
import React, {useEffect, useState} from 'react';
import TableHeader from '../../components/molecules/TableHeader/TableHeader';
import CurrencyTitle from '../../components/atoms/currencyTitle/CurrencyTitle';
import "./CurrencyScreen.css"


const CalcBuy = (value) => {
    console.log(value)
    let angka = parseFloat(value)
    return angka + (angka*0.05)
}

const CalcSell = (value) => {
    console.log(value)
    let angka = parseFloat(value)
    return angka - (angka*0.05)
}
const CurrencyScreen = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true)
        axios
        .get("https://api.currencyfreaks.com/latest?apikey=003cb76e24c74722bcf7376c817a2995&symbols=CAD,IDR,JPY,CHF,EUR,GBP")
        .then((response) => setData (response.data.rates))
        .catch((err) => console.log(err))
        .finally((e) => setIsLoading(false))
    }, []);

    

    return(
        <div class="container">
           
         {isLoading ? (
             <p>Load data...</p>
         ): (
             <div>
                <TableHeader text1="Currency" text2="We Buy" text3="Exchange Rate" text4="We Sell" />   
                <div class="list">
                    <CurrencyTitle text="CAD"/>
                    <text class="content-text">{CalcBuy(data.CAD)}</text>
                    <text class="content-text">{data.CAD}</text>
                    <text class="content-text">{CalcSell(data.CAD)}</text>
                </div>
                <div class="list">
                    <CurrencyTitle text="EUR"/>
                    <text class="content-text">{CalcBuy(data.EUR)}</text>
                    <text class="content-text">{data.EUR}</text>
                    <text class="content-text">{CalcSell(data.EUR)}</text>
                </div>
                <div class="list">
                    <CurrencyTitle text="IDR"/>
                    <text class="content-text">{CalcBuy(data.IDR)}</text>
                    <text class="content-text">{data.IDR}</text>
                    <text class="content-text">{CalcSell(data.IDR)}</text>
                </div>
                <div class="list">
                    <CurrencyTitle text="JPY"/>
                    <text class="content-text">{CalcBuy(data.JPY)}</text>
                    <text class="content-text">{data.JPY}</text>
                    <text class="content-text">{CalcSell(data.JPY)}</text>
                </div>
                <div class="list">
                    <CurrencyTitle text="CHF"/>
                    <text class="content-text">{CalcBuy(data.CHF)}</text>
                    <text class="content-text">{data.CHF}</text>
                    <text class="content-text">{CalcSell(data.CHF)}</text>
                </div>
                <div class="list">
                    <CurrencyTitle text="GBP"/>
                    <text class="content-text">{CalcBuy(data.GBP)}</text>
                    <text class="content-text">{data.GBP}</text>
                    <text class="content-text">{CalcSell(data.GBP)}</text>
                </div>
                {/* {data.map((datum, i) => {
                    return <TableContent datum={datum} key={i} />
                })} */}
                {/* <div class="footer"> */}
                <br />
                <div><p class="content-text">Rates are based from 1 USD</p></div>
                <div><p class="content-text">The application uses API from https://currencyfreaks.com</p></div>
            {/* </div> */}
        </div>
         )}
        
        
    </div>

    )
}

export default CurrencyScreen;