import bgColours from "../data/bgColours";

function Skill(props) {
  const isJunior = props.rating < 5;
  const isMidLevel = props.rating >= 5 && props.rating <= 8;
  const senior = props.rating > 8;
  return (
    <div className="skill" style={{ backgroundColor: bgColours[props.id - 1] }}>
      <p>
        {props.name}{" "}
        <span>{isJunior ? "👶" : isMidLevel ? "👍" : senior ? "💪" : ""} </span>
      </p>
    </div>
  );
}

export default Skill;
