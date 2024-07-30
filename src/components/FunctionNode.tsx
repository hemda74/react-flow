import React, { memo } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { NodeContainer, NodeHeader } from './styledComponents';

const FunctionNode = ({ data, id }: any) => {
    return (
        <>
            <NodeHeader><div>ded</div></NodeHeader>
            <NodeContainer>
                <div style={{ color: "blue" }}>Plus Function Node</div>
                <Handle type="target" position={Position.Top} />
                <Handle type="source" position={Position.Bottom} />
            </NodeContainer>
        </>
    );
};

export default memo(FunctionNode);
