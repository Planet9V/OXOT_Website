import React from 'react';
import { motion } from 'framer-motion';
import './DigitalTwinVisualization.css';

const DigitalTwinVisualization = () => {
  const nodes = [
    { id: 1, x: 100, y: 100, label: 'PLC' },
    { id: 2, x: 300, y: 100, label: 'HMI' },
    { id: 3, x: 200, y: 300, label: 'Sensor' },
    { id: 4, x: 400, y: 300, label: 'Actuator' },
  ];

  const connectors = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
  ];

  return (
    <div className="digital-twin-visualization">
      {connectors.map((connector) => {
        const fromNode = nodes.find((node) => node.id === connector.from);
        const toNode = nodes.find((node) => node.id === connector.to);
        const angle = Math.atan2(toNode.y - fromNode.y, toNode.x - fromNode.x) * 180 / Math.PI;
        const distance = Math.sqrt(Math.pow(toNode.x - fromNode.x, 2) + Math.pow(toNode.y - fromNode.y, 2));

        return (
          <motion.div
            key={`${connector.from}-${connector.to}`}
            className="connector"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{
              top: fromNode.y + 24,
              left: fromNode.x + 25,
              width: distance,
              rotate: angle,
            }}
          />
        );
      })}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="node"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: node.id * 0.2 }}
          style={{ top: node.y, left: node.x }}
        >
          {node.label}
        </motion.motion.div>
      ))}
    </div>
  );
};

export default DigitalTwinVisualization;
