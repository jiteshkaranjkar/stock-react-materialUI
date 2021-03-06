import React, { Fragment } from 'react';
import StockView from "./Stocks/StockView";

const MainBody = ({market, dashboardView, stock}) => {
    return (
        <Fragment>
            <StockView market={market} dashboardView={dashboardView} stock={stock}/>
        </Fragment>
    );
}

export default MainBody