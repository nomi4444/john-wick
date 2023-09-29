
import React from 'react';
import './Aooter.css';

const Footer = () => {

  const skills = [
    {
      title: 'Marksmanship',
      description: 'John Wicks marksmanship is legendary in the world of contract killers. He is renowned for his unparalleled precision and accuracy with various firearms. Whether its a close-quarters shootout or a long-range sniper mission, John Wicks aim is nothing short of perfection.',
    },
    {
      title: 'Hand-to-Hand Combat',
      description: 'John Wicks mastery of close-quarters combat and martial arts is unparalleled. He excels in hand-to-hand combat situations, making him a formidable adversary in any confrontation. His skills in this domain go hand in hand with his marksmanship creating a lethal combination that few can match..',
    },
    {
      title: 'Tactical Planning',
      description: 'John Wick is celebrated not only for his combat skills but also for his exceptional tactical planning and strategic thinking. He is a master at assessing complex situations, making split-second decisions, and outsmarting his adversaries, even in the most intense and high-pressure scenarios..',
    },
  ];

 
  const SkillCard = ({ title, description }) => {
    return (
      <div className="skill-card">
        <h3 className="skill-title">{title}</h3>
        <p className="skill-description">{description}</p>
      </div>
    );
  };

  return (
    <footer className="footer">
      <div className="skill-cards">
        {skills.map((skill, index) => (
          <SkillCard key={index} title={skill.title} description={skill.description} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;