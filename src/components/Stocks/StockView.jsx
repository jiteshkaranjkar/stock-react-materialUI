import React, { Fragment, useState } from 'react';
import StockCard from "./StockCard";
import StockGridList from "./StockGridList";
import UsStocks from '../../data/stocksUsa';
import IndianStocks from '../../data/stocksInd';
import AusStocks from '../../data/stocksAus';
import ETFs from '../../data/etfs';

const getMarketData = (market) => {
  switch(market){
    case 1:
      return IndianStocks;
      break;
    case 3:
      return  UsStocks;
      break;
    case 4:
      return  ETFs;
      break;
    case 2:
      return  AusStocks;
      break;
    default:
      return  AusStocks;
      break;
  }
}

const StockView = ({ market, dashboardView, stock}) => {
  let stocks = getMarketData(market);
  if(stock !== null && stock !== undefined ){
    stock.id = stocks.length + 1;
    stocks = [...stocks, stock]
  }
  return (
    <Fragment>
      {
        dashboardView === 'list'
        ? <StockCard market={stocks}/>
        : <StockGridList market={stocks}/>
      }
    </Fragment>
  );
}

export default StockView;