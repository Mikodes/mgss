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
    ReferenceField,
    ReferenceInput,
    AutocompleteInput,
    SelectInput,
    DateField,
    required
} from 'admin-on-rest';

export const BuyInCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Cliente" source="id" reference="clientes" validate={required}>
                <SelectInput source="id" optionText="id"/>
            </ReferenceInput>
            <NumberInput source="amount"/>
        </SimpleForm>
    </Create>
);


export const BuyInList = (props) => (
    <List {...props}>
        <Datagrid>
            {/*<TextField source="id"/>*/}
            {/*<TextField source="name"/>*/}
            {/*<ReferenceField label="Cliente" source="client_id" reference="clientes"/>*/}
            {/*<TextField source="firstName"/>*/}
            {/*</ReferenceField>*/}

            <ReferenceField label="Cliente" source="user_code" reference="clientes">
                <TextField source="user_code"/>
            </ReferenceField>
            <DateField source="created_at"/>
            <NumberField source="amount" options={{style: 'currency', currency: 'EUR'}}/>
        </Datagrid>
    </List>
);