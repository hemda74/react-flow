import React, { memo } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { NodeContainer, InputField, NodeMain, NodeHeader } from './styledComponents';

const InputNode = ({ data, id }: any) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        data.value = Number(e.target.value);
    };

    return (
        <NodeMain>
            <NodeHeader><img style={{ marginRight: '0.5rem' }} src='/d.svg' width={20} height={20} alt="" />
                <span style={{ marginTop: '0.2rem' }}>Input Node</span></NodeHeader>
            <NodeContainer>
                <div>{data.label}</div>
                <InputField
                    type="number"
                    defaultValue={data.value ?? 0}
                    onChange={handleChange}

                />
                <Handle type="source" position={Position.Bottom} />
            </NodeContainer></NodeMain>
    );
};

export default memo(InputNode);
