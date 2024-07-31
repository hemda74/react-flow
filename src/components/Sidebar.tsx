import React from 'react';
import { SidebarContainer } from './styledComponents';

const Sidebar = () => {
    const onDragStart = (event: React.DragEvent, nodeType: string) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <SidebarContainer>
            <div style={{ display: 'flex', marginTop: '1.5rem' }} onDragStart={(event) => onDragStart(event, 'inputNode')} draggable>
                <img style={{ marginRight: '0.5rem' }} src='/input.svg' width={30} height={30} alt="" />
                <span style={{ marginTop: '0.2rem' }}>Input Node</span>
            </div>
            <div style={{ display: 'flex', marginTop: '1.5rem' }} onDragStart={(event) => onDragStart(event, 'functionNode')} draggable>
                <img style={{ marginRight: '0.5rem', }} src='/fun.svg' width={30} height={30} alt="" />
                <span style={{ marginTop: '0.4rem' }}>Function Node</span>
            </div>
            <div style={{ display: 'flex', marginTop: '1.5rem' }} onDragStart={(event) => onDragStart(event, 'outputNode')} draggable>
                <img style={{ marginRight: '0.5rem' }} src='/res.svg' width={30} height={30} alt="" />
                <span style={{ marginTop: '0.4rem' }}>
                    Output Node</span>
            </div>
        </SidebarContainer>
    );
};

export default Sidebar;
