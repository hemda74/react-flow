import React, { memo } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { NodeContainer, NodeHeader, NodeMain } from './styledComponents';

const FunctionNode = ({ data, id }: any) => {
    return (
        <>
            <NodeMain>
                <NodeHeader><img style={{ marginRight: '0.5rem' }} src='/f2.svg' width={20} height={20} alt="" />
                    <span style={{ marginTop: '0.2rem' }}>Input Node</span></NodeHeader>
                <NodeContainer>
                    <div style={{ color: 'black' }}>Plus Function Node</div>
                    <Handle type="target" position={Position.Top} />
                    <Handle type="source" position={Position.Bottom} />
                </NodeContainer>
            </NodeMain>
        </>
    );
};

export default memo(FunctionNode);
