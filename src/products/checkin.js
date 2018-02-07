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
    SelectInput
} from 'admin-on-rest';

export const BuyInCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Post" source="client_id" reference="clientes">
                <SelectInput optionText="user_code" />
            </ReferenceInput>
            <NumberInput source="amount" />
        </SimpleForm>
    </Create>
);


export const BuyInList = (props) => (
    <List {...props}>
        <Datagrid>
            {/*<TextField source="id"/>*/}
            {/*<TextField source="name"/>*/}
            {/*<ReferenceField label="Cliente" source="client_id" reference="clientes">*/}
            {/*<TextField source="firstName"/>*/}
            {/*</ReferenceField>*/}
            <NumberField source="amount" options={{style: 'currency', currency: 'EUR'}}/>
        </Datagrid>
    </List>
);