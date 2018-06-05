import React from 'react';
import {ReferenceField, TextField} from 'admin-on-rest';


const ProductReferenceField = (props) => (
    <ReferenceField label="Hierva" source="product_id" reference="productos" {...props}>
        <TextField source="name"/>
    </ReferenceField>
);
ProductReferenceField.defaultProps = {
    source: 'product_id',
    addLabel: true,
};

export default ProductReferenceField;