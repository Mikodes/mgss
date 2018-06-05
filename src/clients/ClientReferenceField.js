import React from 'react';
import {ReferenceField} from 'admin-on-rest';

import FullNameField from './FullNameField';

const ClientReferenceField = (props) => (
    <ReferenceField source="client_id" reference="clientes" {...props}>
        <FullNameField/>
    </ReferenceField>
);
ClientReferenceField.defaultProps = {
    source: 'client_id',
    addLabel: true,
};

export default ClientReferenceField;