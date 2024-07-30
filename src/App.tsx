import React, { useCallback } from 'react';
import ReactFlow, {
	addEdge,
	Background,
	Controls,
	ReactFlowProvider,
	useEdgesState,
	useNodesState,
	Connection,
	Node,
} from 'react-flow-renderer';
import Sidebar from './components/Sidebar';
import InputNode from './components/InputNode';
import FunctionNode from './components/FunctionNode';
import OutputNode from './components/OutputNode';
import { RunButton } from './components/styledComponents';

const nodeTypes = {
	inputNode: InputNode,
	functionNode: FunctionNode,
	outputNode: OutputNode,
};

const App: React.FC = () => {
	const [nodes, setNodes, onNodesChange] = useNodesState([]);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);

	const onConnect = useCallback(
		(params: Connection) => setEdges((eds) => addEdge(params, eds)),
		[setEdges]
	);

	const onDrop = useCallback(
		(event: React.DragEvent) => {
			event.preventDefault();
			const reactFlowBounds = document.getElementById('reactflow')?.getBoundingClientRect();
			const type = event.dataTransfer.getData('application/reactflow');
			if (type && reactFlowBounds) {
				const position = {
					x: event.clientX - reactFlowBounds.left,
					y: event.clientY - reactFlowBounds.top,
				};
				const id = `${type}-${new Date().getTime()}`;
				const newNode: Node = {
					id,
					type,
					position,
					data: { label: `${type.charAt(0).toUpperCase() + type.slice(1)} Node`, value: 0 },
				};
				setNodes((nds) => nds.concat(newNode));
			}
		},
		[setNodes]
	);

	const onDragOver = useCallback((event: React.DragEvent) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = 'move';
	}, []);

	const calculateOutputs = useCallback(() => {
		console.log('Calculating outputs...');
		const updatedNodes = nodes.map((node) => {
			if (node.type === 'functionNode') {
				const inputEdges = edges.filter((edge) => edge.target === node.id);
				const inputValues = inputEdges.map(
					(edge) => nodes.find((n) => n.id === edge.source)?.data.value || 0
				);
				const outputValue = inputValues.reduce((acc, val) => acc + val, 0); // Change operation as needed

				return {
					...node,
					data: {
						...node.data,
						value: outputValue,
					},
				};
			}
			return node;
		});

		const outputNodes = updatedNodes.map((node) => {
			if (node.type === 'outputNode') {
				const inputEdges = edges.filter((edge) => edge.target === node.id);
				const inputValues = inputEdges.map(
					(edge) => updatedNodes.find((n) => n.id === edge.source)?.data.value || 0
				);
				const outputValue = inputValues.reduce((acc, val) => acc + val, 0); // Change operation as needed

				return {
					...node,
					data: {
						...node.data,
						value: outputValue,
					},
				};
			}
			return node;
		});

		setNodes(outputNodes);
	}, [edges, nodes, setNodes]);

	const handleRunButtonClick = () => {
		calculateOutputs();
	};

	return (
		<ReactFlowProvider>
			<div style={{ width: '100vw', height: '100vh', display: 'flex', position: 'relative' }}>
				<Sidebar />
				<div id="reactflow" style={{ flex: 1 }}>
					<ReactFlow
						nodes={nodes}
						edges={edges}
						onNodesChange={onNodesChange}
						onEdgesChange={onEdgesChange}
						onConnect={onConnect}
						nodeTypes={nodeTypes}
						onDrop={onDrop}
						onDragOver={onDragOver}
						fitView
					>
						<Background />
						<Controls />
					</ReactFlow>
				</div>
				<div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
					<RunButton onClick={handleRunButtonClick}>Run</RunButton>
				</div>
			</div>
		</ReactFlowProvider>
	);
};

export default App;
