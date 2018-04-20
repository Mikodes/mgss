import React from 'react';
import {Admin, Resource} from 'admin-on-rest';


import {RestClient, AuthClient} from 'aor-firebase-client';
import {ProductCreate, ProductList, ProductEdit} from './products/products';
import {BuyInCreate, BuyInList} from './products/checkin';
// import {OrderList} from './products/orders';
import {ClientCreate, ClientList, ClientShow} from './clients/Clients';


import ClientIcon from 'material-ui/svg-icons/action/account-box';
import OrderIcon from 'material-ui/svg-icons/action/shopping-basket';
import RecargaIcon from 'material-ui/svg-icons/editor/attach-money';
import ProductIcon from 'material-ui/svg-icons/maps/local-florist';

const firebaseConfig = {
    apiKey: "AIzaSyCmJuHV92qZXfflWiBDeXHE3mA0esihZms",
    authDomain: "mgss-314d2.firebaseapp.com",
    databaseURL: "https://mgss-314d2.firebaseio.com",
    projectId: "mgss-314d2",
    storageBucket: "mgss-314d2.appspot.com",
    messagingSenderId: "774019699994"
};
const trackedResources = ['productos', 'users', 'recargas', 'clientes',]
const App = () => (
    <Admin title="Medical Green Solution" restClient={RestClient(trackedResources, firebaseConfig)}>

        <Resource name="recargas" list={BuyInList} create={BuyInCreate} icon={RecargaIcon}/>
        <Resource name="clientes" list={ClientList} create={ClientCreate} show={ClientShow} icon={ClientIcon}/>
        <Resource name="productos" list={ProductList} create={ProductCreate} edit={ProductEdit} icon={ProductIcon}/>

        {/*<Resource name="orders" list={OrderList} create={BuyInCreate} icon={OrderIcon}/>*/}


        <Resource name="users"/>

    </Admin>
);

export default App;