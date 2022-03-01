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
        <div  class="currencyContainer">
           
         {isLoading ? (
             <p>Load data...</p>
         ): (
             <div>
                <TableHeader text1="Currency" text2="We Buy" text3="Exchange Rate" text4="We Sell" />   
                <div class="currencyList">
                    <CurrencyTitle text="CAD"/>
                    <text class="currencyContentText">{CalcBuy(data.CAD)}</text>
                    <text class="currencyContentText">{data.CAD}</text>
                    <text class="currencyContentText">{CalcSell(data.CAD)}</text>
                </div>
                <div class="currencyList">
                    <CurrencyTitle text="EUR"/>
                    <text class="currencyContentText">{CalcBuy(data.EUR)}</text>
                    <text class="currencyContentText">{data.EUR}</text>
                    <text class="currencyContentText">{CalcSell(data.EUR)}</text>
                </div>
                <div class="currencyList">
                    <CurrencyTitle text="IDR"/>
                    <text class="currencyContentText">{CalcBuy(data.IDR)}</text>
                    <text class="currencyContentText">{data.IDR}</text>
                    <text class="currencyContentText">{CalcSell(data.IDR)}</text>
                </div>
                <div class="currencyList">
                    <CurrencyTitle text="JPY"/>
                    <text class="currencyContentText">{CalcBuy(data.JPY)}</text>
                    <text class="currencyContentText">{data.JPY}</text>
                    <text class="currencyContentText">{CalcSell(data.JPY)}</text>
                </div>
                <div class="currencyList">
                    <CurrencyTitle text="CHF"/>
                    <text class="currencyContentText">{CalcBuy(data.CHF)}</text>
                    <text class="currencyContentText">{data.CHF}</text>
                    <text class="currencyContentText">{CalcSell(data.CHF)}</text>
                </div>
                <div class="currencyList">
                    <CurrencyTitle text="GBP"/>
                    <text class="currencyContentText">{CalcBuy(data.GBP)}</text>
                    <text class="currencyContentText">{data.GBP}</text>
                    <text class="currencyContentText">{CalcSell(data.GBP)}</text>
                </div>
                {/* {data.map((datum, i) => {
                    return <TableContent datum={datum} key={i} />
                })} */}
                {/* <div class="currencyFooter"> */}
                <br />
                <div><p class="currencyContentText">Rates are based from 1 USD</p></div>
                <div><p class="currencyContentText">The application uses API from https://currencyfreaks.com</p></div>
            {/* </div> */}
        </div>
         )}
        
        
    </div>

    )
}

export default CurrencyScreen;