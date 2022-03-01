import React from 'react';
import CurrencyTitle from '../../atoms/currencyTitle/CurrencyTitle';
import './TableHeader.css'

const TableHeader = ({text1, text2, text3, text4}) => {
    return (
        <div class="headerList">
            <CurrencyTitle text={text1}/>
            <CurrencyTitle text={text2}/>
            <CurrencyTitle text={text3}/>
            <CurrencyTitle text={text4}/>
        </div>
    )
}

export default TableHeader;