import React from 'react';
import {
    AutocompleteInput,
    BooleanField,
    BooleanInput,
    Create,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    EditButton,
    Filter,
    List,
    NullableBooleanInput,
    NumberField,
    NumberInput,
    ReferenceInput,
    required,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput,
    translate
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/action/bookmark';
// import Basket from './Basket';
// import NbItemsField from './NbItemsField';
import ClientReferenceField from '../clients/ClientReferenceField';
import ProductReferenceField from '../products/ProductReferenceField';

export const CommandIcon = Icon;

const CommandFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn/>
        <ReferenceInput label="Cliente" source="client_id" reference="clientes">
            <AutocompleteInput optionText={choice => `${choice.first_name} ${choice.last_name}`}/>
        </ReferenceInput>
        <ReferenceInput label="Hierva" source="product_id" reference="productos">
            <AutocompleteInput optionText={choice => `${choice.name}`}/>
        </ReferenceInput>
        <DateInput source="created_at" label="Fecha" options={{locale: 'es'}}/>
    </Filter>
);

export const CommandList = (props) => (
    <List {...props} filters={<CommandFilter/>} sort={{field: 'created_at', order: 'ASC'}} perPage={50}>
        <Datagrid>
            <DateField source="created_at" locales="es"/>
            <ClientReferenceField/>
            <ProductReferenceField/>
            <NumberField source="quantity" options={{maximumFractionDigits: 2}} elStyle={{fontWeight: 'bold'}}/>
        </Datagrid>
    </List>
);

export const CommandCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="client_id" label="Cliente" reference="clientes" validate={required}
                            options={{fullWidth: true}}>
                <AutocompleteInput optionText={choice => `${choice.firstName} ${choice.lastName}`}/>
            </ReferenceInput>
            <ReferenceInput source="product_id" label="Producto" reference="productos" validate={required}
                            options={{fullWidth: true}}>
                <AutocompleteInput optionText={choice => `${choice.name} - ${choice.pvp} euros`}/>
            </ReferenceInput>
            <NumberInput source="quantity" options={{fullWidth: true}} validate={required}/>
        </SimpleForm>
    </Create>
);



