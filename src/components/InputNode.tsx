import React, { memo } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { NodeContainer, InputField } from './styledComponents';

const InputNode = ({ data, id }: any) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        data.value = Number(e.target.value);
    };

    return (
        <NodeContainer>
            <div>{data.label}</div>
            <InputField
                type="number"
                defaultValue={data.value ?? 0}
                onChange={handleChange}

            />
            <Handle type="source" position={Position.Bottom} />
        </NodeContainer>
    );
};

export default memo(InputNode);
