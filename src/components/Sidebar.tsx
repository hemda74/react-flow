import React from 'react';
import { SidebarContainer } from './styledComponents';

const Sidebar = () => {
    const onDragStart = (event: React.DragEvent, nodeType: string) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <SidebarContainer>
            <div onDragStart={(event) => onDragStart(event, 'inputNode')} draggable>
                Input Node
            </div>
            <div onDragStart={(event) => onDragStart(event, 'functionNode')} draggable>
                Function Node
            </div>
            <div onDragStart={(event) => onDragStart(event, 'outputNode')} draggable>
                Output Node
            </div>
        </SidebarContainer>
    );
};

export default Sidebar;
