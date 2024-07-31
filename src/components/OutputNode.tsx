import React, { memo } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { NodeContainer, NodeHeader, NodeMain } from './styledComponents';

const OutputNode = ({ data, id }: any) => {
    return (
        <>
            <NodeMain>
                <NodeHeader><img style={{ marginRight: '0.5rem' }} src='/r2.svg' width={20} height={20} alt="" />
                    <span style={{ marginTop: '0.2rem' }}>Output Node</span></NodeHeader>

                <NodeContainer>
                    <div style={{ color: "black" }}>{data.value}</div>
                    <Handle type="target" position={Position.Top} />
                </NodeContainer>
            </NodeMain>
        </>
    );
};

export default memo(OutputNode);
