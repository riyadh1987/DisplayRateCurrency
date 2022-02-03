import React from 'react';
import CurrencyTitle from '../../atoms/currencyTitle/CurrencyTitle';
import "./TableContent.css"

const TableContent = ({props}) => {
    console.log(props)
    return (
        <div class="list">
            <CurrencyTitle text="AAAA"/>
            <text class="content-text">1.2342</text>
            <text class="content-text">1.234</text>
            <text class="content-text">1.1909</text>
        </div>
    )
}

export default TableContent;

