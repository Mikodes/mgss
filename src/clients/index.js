import React from 'react';
import {
    BooleanField,
    Create,
    Datagrid,
    DateField,
    DateInput,
    Delete,
    Edit,
    EditButton,
    Filter,
    FormTab,
    List,
    LongTextInput,
    maxValue,
    minValue,
    NullableBooleanInput,
    number,
    NumberField,
    NumberInput,
    ReferenceManyField,
    required,
    Show,
    ShowButton,
    SimpleForm,
    Tab,
    TabbedForm,
    TabbedShowLayout,
    TextField,
    TextInput,
    translate,
} from 'admin-on-rest';
import FullNameField from './FullNameField';
import ProductReferenceField from '../products/ProductReferenceField'

const ClientFilter = props => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn/>
        <TextInput label="Codigo" source="user_code" alwaysOn/>
        <DateInput source="birthday" label="Cumpleaños"/>
        <DateInput source="created_at" label="Registrado en"/>

    </Filter>
);

export const ClientList = (props) => (
    <List {...props} filters={<ClientFilter/>} sort={{field: 'created_at', order: 'DESC'}} perPage={50}>
        <Datagrid bodyOptions={{stripedRows: true, showRowHover: true}}>
            <TextField label="Codigo" source="user_code"/>
            <FullNameField/>
            <TextField label="Telefono" source="phone"/>
            <TextField label="Email" source="email"/>
            <DateField label="Fecha registrado" source="created_at"/>
            <ShowButton/>
            <EditButton/>
        </Datagrid>
    </List>
);

const maximoMensual = [required, number, minValue(0), maxValue(90)];
export const ClientCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="user_code" options={{fullWidth: true}} validation={{required: true}}/>
            <TextInput source="firstName" options={{fullWidth: true}} label="Nombre" validation={{required: true}}/>
            <TextInput source="lastName" options={{fullWidth: true}} label="Apellidos" validation={{required: true}}/>
            <NumberInput source="lim_mensual" label="Maximo compra mensual" options={{fullWidth: true}}
                         validation={{maximoMensual}}/>
            <TextInput source="dni" label="Dni" options={{fullWidth: true}}/>
            <DateInput source="birthday" options={{fullWidth: true}} label="Fecha de Nacimiento"/>
            <TextInput source="email" options={{fullWidth: true}} label="email"/>
            <TextInput source="phone" options={{fullWidth: true}} label="numero telefono"/>
            <TextInput source="facebook" options={{fullWidth: true}}/>

        </SimpleForm>
    </Create>
);
const ClientTitle = ({record}) => <span>Cliente : {record.firstName} {record.lastName}</span>;

export const ClientEdit = (props) => (
    <Edit {...props} title={<ClientTitle/>}>
        <SimpleForm>
            <TextInput source="user_code" options={{fullWidth: true}} validation={{required: true}}/>
            <TextInput source="firstName" options={{fullWidth: true}} label="Nombre" validation={{required: true}}/>
            <TextInput source="lastName" options={{fullWidth: true}} label="Apellidos" validation={{required: true}}/>
            <NumberInput source="lim_mensual" label="Maximo compra mensual" options={{fullWidth: true}}
                         validate={maximoMensual}/>
            <TextInput source="dni" label="Dni" options={{fullWidth: true}}/>
            <DateInput source="birthday" options={{fullWidth: true}} label="Fecha de Nacimiento"/>
            <TextInput source="email" options={{fullWidth: true}} label="email"/>
            <TextInput source="phone" options={{fullWidth: true}} label="numero telefono"/>
            <TextInput source="facebook" options={{fullWidth: true}}/>
        </SimpleForm>
    </Edit>
);

const AportacionesFilter = props => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn/>
        <TextInput label="Codigo" source="user_code" alwaysOn/>
        <DateInput source="birthday" label="Cumpleaños"/>
        <DateInput source="created_at" label="Fecha"/>

    </Filter>
);

export const ClientShow = (props) => (
    <Show {...props} title={<ClientTitle/>}>
        <TabbedShowLayout>
            <Tab label="Informacion Cliente">

                <TextField label="Codigo Usuario" source="user_code"/>
                <DateField label="Fecha nacimiento" source="birthday"/>
                <TextField source="email"/>
                <TextField label="numero telefono" source="phone"/>
                <TextField source="facebook"/>
            </Tab>
            <Tab label="Aportaciones">
                <ReferenceManyField addLabel={false} reference="aportaciones" target="client_id">
                    <Datagrid sort={{field: 'created_at', order: 'ASC'}} perPage={50}>
                        <DateField label="Fecha" source="created_at" showTime/>
                        <NumberField label="Cantidad" source="amount" options={{style: 'currency', currency: 'EUR'}}/>
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
            <Tab label="Pedidos">
                <ReferenceManyField addLabel={false} reference="orders" target="client_id">
                    <Datagrid sort={{field: 'created_at', order: 'ASC'}} perPage={50}>
                        <DateField label="Fecha" source="created_at" showTime/>
                        <ProductReferenceField/>
                        <NumberField source="quantity" options={{maximumFractionDigits: 2}}
                                     elStyle={{fontWeight: 'bold'}}/>
                    </Datagrid>
                </ReferenceManyField>
            </Tab>

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