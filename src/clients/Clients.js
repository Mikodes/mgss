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
    FunctionField,
    Show,
    SimpleShowLayout,
    DateField,
    ShowButton,
    TabbedShowLayout,
    Tab,
    Filter
} from 'admin-on-rest';

const ClientFilter = props => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn/>
        <TextInput
            source="firstName"
            label="Nombre"
        />
        <TextInput
            source="user_code"
            label="Codigo Usuario"
        />
    </Filter>
);


export const ClientList = (props) => (
    <List {...props} filters={<ClientFilter/>}>
        <Datagrid>
            <TextField source="user_code"/>
            <FunctionField label="Nombre" render={record => `${record.firstName} ${record.lastName}`}/>
            <TextField source="phone"/>
            <TextField source="email"/>
            {/*<NumberField source="pvp" options={{style: 'currency', currency: 'EUR'}}/>*/}
            {/*<NumberField source="pve" options={{style: 'currency', currency: 'EUR'}}/>*/}
            {/*<BooleanField source="activated"/>*/}
            <ShowButton/>
        </Datagrid>
    </List>
);

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


export const ClientShow = (props) => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Datos Cliente">
                <FunctionField label="Nombre" render={record => `${record.firstName} ${record.lastName}`}/>
                <TextField source="user_code"/>
                <DateField label="Fecha nacimiento" source="birthday"/>
                <TextField source="email"/>
                <TextField source="phone"/>
                <TextField source="facebook"/>
            </Tab>
            <Tab label="Compras"></Tab>
            <Tab label="Checkins"></Tab>

            {/*<ReferenceManyField label="Comments" reference="comments" target="post_id">*/}
            {/*<Datagrid>*/}
            {/*<TextField source="body"/>*/}
            {/*<DateField source="created_at"/>*/}
            {/*<EditButton/>*/}
            {/*</Datagrid>*/}
            {/*</ReferenceManyField>*/}
        </TabbedShowLayout>
    </Show>
);