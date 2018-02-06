import React from 'react';
import {Admin, Resource} from 'admin-on-rest';


import {RestClient, AuthClient} from 'aor-firebase-client';
import {ProductList, ProductCreate} from './products';
import {UserList} from './Users';
import {ClientList, ClientCreate} from './Clients';
const firebaseConfig = {
    apiKey: "AIzaSyCmJuHV92qZXfflWiBDeXHE3mA0esihZms",
    authDomain: "mgss-314d2.firebaseapp.com",
    databaseURL: "https://mgss-314d2.firebaseio.com",
    projectId: "mgss-314d2",
    storageBucket: "mgss-314d2.appspot.com",
    messagingSenderId: "774019699994"
};
const trackedResources = ['productos', 'users', 'clientes']
const App = () => (
    <Admin restClient={RestClient(trackedResources, firebaseConfig)}>
        <Resource name="productos" list={ProductList} create={ProductCreate}/>
        <Resource name="clientes" list={ClientList} create={ClientCreate}/>
        <Resource name="users" list={UserList}/>
    </Admin>
);

export default App;