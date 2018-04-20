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
    BooleanField,
    Edit,
    DisabledInput,
    EditButton
} from 'admin-on-rest';


export const ProductList = (props) => (
    <List {...props}>
        <Datagrid>
            {/*<TextField source="id"/>*/}
            <TextField source="name"/>
            <NumberField source="pvp" options={{style: 'currency', currency: 'EUR'}}/>
            <NumberField source="pve" options={{style: 'currency', currency: 'EUR'}}/>
            <BooleanField source="activated"/>
            <EditButton/>
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

export const ProductEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <TextInput source="name"/>
            <NumberInput source="pvp"/>
            <NumberInput source="pve"/>
            <BooleanInput source="activated"/>
        </SimpleForm>
    </Edit>
);