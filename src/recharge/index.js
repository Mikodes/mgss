import React from 'react';
import {
    AutocompleteInput,
    BooleanInput,
    Create,
    Datagrid,
    DateField,
    Edit,
    EditButton,
    Filter,
    FormTab,
    List,
    NumberField,
    NumberInput,
    ReferenceInput,
    ReferenceManyField,
    required,
    SelectInput,
    SimpleForm,
    TabbedForm,
    TextField,
    TextInput,
    translate
} from 'admin-on-rest';
import ClientReferenceField from '../clients/ClientReferenceField'

const RechargeFilter = props => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn/>
        <NumberInput label="Cantidad" source="amount"/>
    </Filter>
);
export const RechargeList = props => (
    <List {...props} filters={<RechargeFilter/>} sort={{field: 'name', order: 'ASC'}} perPage={50}>
        <Datagrid bodyOptions={{stripedRows: true, showRowHover: true}}>
            <ClientReferenceField/>
            <DateField label="Fecha" source="created_at"/>
            <NumberField label="Cantidad" source="amount" options={{style: 'currency', currency: 'EUR'}}/>
        </Datagrid>
    </List>
);


export const RechargeCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="client_id" label="Cliente" reference="clientes" validate={required}
                            options={{fullWidth: true}}>
                <AutocompleteInput
                    optionText={choice => `${choice.firstName} ${choice.lastName} - ${choice.user_code}`}/>
            </ReferenceInput>
            <NumberInput label="Cantidad a ingresar" source="amount" validation={{required: true, number: true}}
                         options={{fullWidth: true}}/>

        </SimpleForm>
    </Create>
);