import PropTypes from "prop-types";
const Button = (props) => {
  const {
    btnName = "Button",
    onClick,
    color = "bg-blue",
    textColor = "text-white",
    className = "",
  } = props;
  return (
    <div>
      <button
        type="button"
        className={`${textColor} ${color}-700 hover:${color}-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:${color}-600 dark:hover:${color}-700 focus:outline-none dark:focus:ring-blue-800 ${className}`}
        onClick={onClick}
      >
        {btnName}
      </button>
    </div>
  );
};

Button.propTypes = {
  btnName: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
