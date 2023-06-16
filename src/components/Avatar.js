function Avatar(props) {
  console.log(props);
  return (
    <div>
      <img
        className="avatar"
        src={props.src}
        alt={`${props.alt} working on a computer`}
      />
    </div>
  );
}

export default Avatar;
