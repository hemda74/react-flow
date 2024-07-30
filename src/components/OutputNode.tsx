import React, { memo } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { NodeContainer } from './styledComponents';

const OutputNode = ({ data, id }: any) => {
    return (
        <NodeContainer>
            <div>{data.label}</div>
            <div style={{ color: "red" }}>{data.value}</div>
            <Handle type="target" position={Position.Top} />
        </NodeContainer>
    );
};

export default memo(OutputNode);
