import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* distribute the passed in properties automatically */}
      <input {...props.input} />
    </div>
  );
};

export default Input;
