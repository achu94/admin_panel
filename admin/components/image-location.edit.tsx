import React from 'React';
import { Label, Box, DropZone, DropZoneItemProps } from '@admin-bro/design-system';
import { BasePropertyProps} from 'admin-bro';

const Edit: React.FC<BasePropertyProps> = (props) => {
    const {property, onChange} = props;

    const handleDropZoneChange: DropZoneItemProps['onChange'] = (files) => {
        onChange(property.name, files[0]);
    }

    return (
        <Box>
            <Label>{property.label}</Label>
            <DropZone onChange={handleDropZoneChange} />
        </Box>
    )
}

export default Edit;