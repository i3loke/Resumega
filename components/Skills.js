import React, { useState } from 'react';
import Tree from 'react-d3-tree';
import ReactTooltip from 'react-tooltip';

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillTreeData = {
    name: 'Skills',
    children: [
      {
        name: 'Programming Languages',
        children: [
          { name: 'Python', level: 90, description: 'Experienced in Python for data analysis and web development.' },
          { name: 'JavaScript', level: 85, description: 'Proficient in JavaScript for front-end development.' },
          // Add more languages
        ],
      },
      {
        name: 'Frameworks',
        children: [
          { name: 'React', level: 80, description: 'Skilled in building SPAs with React.' },
          { name: 'Django', level: 75, description: 'Experienced in building web applications with Django.' },
          // Add more frameworks
        ],
      },
      // Add more categories
    ],
  };

  const handleNodeClick = (nodeData) => {
    setSelectedSkill(nodeData.data);
  };

  const handleNodeMouseOver = (nodeData) => {
    setHoveredSkill(nodeData.data);
  };

  const handleNodeMouseOut = () => {
    setHoveredSkill(null);
  };

  const customNodeSvgShape = {
    shape: 'circle',
    shapeProps: {
      r: 10,
      fill: '#00aaff',
    },
  };

  const treeStyles = {
    links: {
      stroke: '#00aaff',
      strokeWidth: 2,
    },
    nodes: {
      node: {
        circle: {
          fill: '#00aaff',
        },
        name: {
          stroke: '#00aaff',
          strokeWidth: 1,
        },
      },
      leafNode: {
        circle: {
          fill: '#00aaff',
        },
        name: {
          stroke: '#00aaff',
          strokeWidth: 1,
        },
      },
    },
  };

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="h-96">
        <Tree
          data={skillTreeData}
          orientation="vertical"
          translate={{ x: 200, y: 50 }}
          onClick={handleNodeClick}
          onMouseOver={handleNodeMouseOver}
          onMouseOut={handleNodeMouseOut}
          collapsible={true}
          nodeSvgShape={customNodeSvgShape}
          styles={treeStyles}
        />
        <ReactTooltip />
      </div>
      {selectedSkill && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">{selectedSkill.name}</h3>
          {selectedSkill.level && (
            <div className="w-full bg-gray-200 rounded-full h-2.5 cursor-pointer" onClick={() => alert(`Examples of ${selectedSkill.name}`)}>
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${selectedSkill.level}%` }}
              ></div>
            </div>
          )}
        </div>
      )}
      {hoveredSkill && (
        <div className="absolute bg-white p-2 rounded shadow-md" style={{ top: '10px', left: '10px' }}>
          <h4 className="text-sm font-semibold">{hoveredSkill.name}</h4>
          <p className="text-xs">{hoveredSkill.description}</p>
        </div>
      )}
    </section>
  );
}