import React, { Fragment, useState, useEffect } from 'react';
import MainBody from './components/MainBody';
import { Header, Footer } from './components/Layout';
import { SnackbarProvider } from 'notistack';
import Collapse from '@material-ui/core/Collapse';

const App = () => {
const [market, setMarket] = useState(0); //Footer to select the default market 
const [stock, setStock] = useState(); //Footer to select the default market 
const [dashboardView, setDashboardView] = useState('list')//Header to select the default view

    useEffect(() => {
        const view = localStorage.getItem("dashboardView") || 'list';
        const mkt = localStorage.getItem("market") || 'AUS';
        setDashboardView(view);
        setMarket(mkt);
    }, [])

    useEffect(() => {
        localStorage.setItem("dashboardView", dashboardView);
        localStorage.setItem("market", market);
    }, [])

    const handleMarketChange = (event, marketIndexValue) =>{
        setMarket(marketIndexValue);
        localStorage.setItem("market", marketIndexValue);
    }

    const handleDashboardView = (event, view) =>{
        if(dashboardView === 'list')
        {
            setDashboardView('grid');
            localStorage.setItem("dashboardView", 'grid');
        }
        else{
            setDashboardView('list');
            localStorage.setItem("dashboardView", 'list');
        }
    }

    const addStock = (event) => {
        setStock(event);
    }    
    
    return (
        <Fragment>
            <SnackbarProvider
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                maxSnack={1}
                TransitionComponent={Collapse}
                hideIconVariant={false}
            >
                <Header onHandleDashboardView={handleDashboardView} dashboardView={dashboardView} onAddStock={addStock}/>
                <MainBody market={market} dashboardView={dashboardView} stock={stock}/>
                <Footer onMarketChange={handleMarketChange} market={market}/>
            </SnackbarProvider>
        </Fragment>
    );
}
export default App;