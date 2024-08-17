import React, { useEffect, useState } from 'react';

export default function Projects({ simplifiedMode }) {
    const projects = [
      {
        name: 'AI Model Development',
        description: 'Successfully developed and optimized AI models...',
        link: 'https://example.com/project1'
      },
      // Add more projects
    ];
  
    return (
      <section className="py-10">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              {!simplifiedMode && project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }