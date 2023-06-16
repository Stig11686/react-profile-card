import Skill from "./Skill";

function SkillList(props) {
  const { skills } = props;
  console.log(skills);
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          key={skill.id}
          id={skill.id}
          name={skill.name}
          rating={skill.rating}
        />
      ))}
    </div>
  );
}

export default SkillList;
