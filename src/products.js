import React from 'react';
import {
    List,
    Create,
    SimpleForm,
    TextInput,
    Datagrid,
    TextField,
    NumberInput,
    BooleanInput,
    NumberField,
    BooleanField
} from 'admin-on-rest';

// const ProductListFilter = (props) => (
//     <Filter {...props}>
//         <TextInput label="Search" source="q" alwaysOn />
//         <TextInput label="Title" source="title" defaultValue="Hello, World!" />
//     </Filter>
// );


export const ProductList = (props) => (
    <List {...props}>
        <Datagrid>
            {/*<TextField source="id"/>*/}
            <TextField source="name"/>
            <NumberField source="pvp" options={{style: 'currency', currency: 'EUR'}}/>
            <NumberField source="pve" options={{style: 'currency', currency: 'EUR'}}/>
            <BooleanField source="activated"/>
        </Datagrid>
    </List>
);

export const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <NumberInput source="pvp"/>
            <NumberInput source="pve"/>
            <BooleanInput source="activated"/>
        </SimpleForm>
    </Create>
);
