import React, { useState } from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";
import SkillInfoCard from "./SkillInfoCard/SkillInfoCard";

const Skills = () => {
  const [selectedSkills, setSelectedSkills] = useState(SKILLS[0]);
  const handleSelectedSkills = (data) => {
    setSelectedSkills(data);
  };

  return (
    <section className="skills-container">
      <h5>Technical Proficiency</h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkills.title === item.title}
              onClick={() => {
                handleSelectedSkills(item)
              }}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillInfoCard
          heading={selectedSkills.title}
          skills={selectedSkills.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
