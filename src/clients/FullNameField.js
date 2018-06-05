import React from 'react';
import pure from 'recompose/pure';

const FullNameField = ({record = {}, size = 25}) => <span>
    <span style={{display: 'inline-block', width: size / 3}}>&nbsp;</span>
    {record.firstName} {record.lastName} - #{record.user_code}
</span>;


const PureFullNameField = pure(FullNameField);

PureFullNameField.defaultProps = {
    source: 'last_name',
    label: 'Cliente',
};

export default PureFullNameField;