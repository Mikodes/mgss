import React from 'react';
import {Admin, Resource} from 'admin-on-rest';


import {RestClient} from 'aor-firebase-client';
import {ProductCreate, ProductEdit, ProductList} from './products';
import {RechargeCreate, RechargeList} from './recharge';
import {ClientCreate, ClientEdit, ClientList, ClientShow} from "./clients";
import {CommandCreate, CommandIcon, CommandList} from "./commands";
import ClientIcon from 'material-ui/svg-icons/action/account-box';
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
const trackedResources = ['productos', 'users', 'aportaciones', 'clientes', 'orders']
const App = () => (
    <Admin title="Medical Green Solution"
           restClient={RestClient(trackedResources, firebaseConfig)}>
        <Resource name="clientes" list={ClientList} create={ClientCreate} edit={ClientEdit} show={ClientShow}
                  icon={ClientIcon}/>
        <Resource name="productos" list={ProductList} create={ProductCreate} edit={ProductEdit} icon={ProductIcon}/>
        <Resource name="aportaciones" list={RechargeList} create={RechargeCreate} icon={RecargaIcon}/>
        <Resource label="Pedidos" name="orders" create={CommandCreate} list={CommandList} icon={CommandIcon}/>


        <Resource name="users"/>

    </Admin>
);

export default App;