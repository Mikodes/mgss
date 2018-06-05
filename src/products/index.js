import React from 'react';
import {
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
    SelectInput,
    SimpleForm,
    TabbedForm,
    TextField,
    TextInput,
    translate
} from 'admin-on-rest';

const ProductFilter = props => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn/>
        <NumberInput source="pvp"/>
        <NumberInput source="pve"/>
        <BooleanInput source="activated"/>
    </Filter>
);
export const ProductList = props => (
    <List {...props} filters={<ProductFilter/>} sort={{field: 'name', order: 'ASC'}} perPage={50}>
        <Datagrid bodyOptions={{stripedRows: true, showRowHover: true}}>
            <TextField label="Nombre" source="name"/>
            <NumberField label="Precio Venta Publico" source="pvp" options={{style: 'currency', currency: 'EUR'}}/>
            <NumberField label="Precio Interno" source="pve" options={{style: 'currency', currency: 'EUR'}}/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" options={{fullWidth: true}} validation={{required: true}}/>
            <NumberInput label="Precio Venta Publico" source="pvp" validation={{required: true}}
                         options={{fullWidth: true}}/>
            <NumberInput label="Precio Interno" source="pve" validation={{required: true}} options={{fullWidth: true}}/>
            <BooleanInput source="activated"/>
        </SimpleForm>
    </Create>
);
const ProductTitle = ({record}) => <span>Hierva tipo: {record.name}</span>;
export const ProductEdit = (props) => (
    <Edit {...props} title={<ProductTitle/>}>
        <SimpleForm>
            <TextInput source="name" options={{fullWidth: true}} validation={{required: true}}/>
            <NumberInput label="Precio Venta Publico" source="pvp" validation={{required: true}}
                         options={{fullWidth: true}}/>
            <NumberInput label="Precio Interno" source="pve" validation={{required: true}} options={{fullWidth: true}}/>
            <BooleanInput source="activated"/>
        </SimpleForm>
    </Edit>
);