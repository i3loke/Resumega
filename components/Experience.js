import { Parallax } from 'react-scroll-parallax';

export default function Experience({ simplifiedMode }) {
  const experiences = [
    {
      title: 'Production Supervisor',
      company: 'Hot Tees',
      date: '2021-2024',
      responsibilities: [
        'Spearheaded daily operations...',
        // Add more responsibilities
      ]
    },
    // Add more experiences
  ];

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      {experiences.map((exp, index) => (
        <Parallax key={index} y={[-20, 20]} tagOuter="div">
          <div className="mb-6">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600">{exp.company} | {exp.date}</p>
            <ul className="list-disc list-inside mt-2">
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        </Parallax>
      ))}
    </section>
  );
}