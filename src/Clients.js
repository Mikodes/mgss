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
    DateInput,
    FunctionField
} from 'admin-on-rest';


export const ClientList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="user_code"/>
            <FunctionField label="Nombre" render={record => `${record.firstName} ${record.lastName}`}/>
            {/*<NumberField source="pvp" options={{style: 'currency', currency: 'EUR'}}/>*/}
            {/*<NumberField source="pve" options={{style: 'currency', currency: 'EUR'}}/>*/}
            {/*<BooleanField source="activated"/>*/}
        </Datagrid>
    </List>
);
// Codigo usuario
// COdigo QR
// Nombre
// Apellidos
// FEcha de nacimiento
// email
// telefono
// facebook
// cantidad
export const ClientCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="user_code"/>
            <TextInput source="firstName" label="Nombre"/>
            <TextInput source="lastName" label="Apellidos"/>
            <DateInput source="birthday" label="Fecha de Nacimiento"/>
            <TextInput source="email" label="email"/>
            <TextInput source="phone" label="numero telefono"/>
            <TextInput source="facebook"/>
        </SimpleForm>
    </Create>
);