import propTypes from "prop-types";

const Button = (props) => {
    const className = ['button']

    if(props.isPrimary)
        className.push("button-primary")
    if(props.isWideMobile)
        className.push("button-wide-mobile")
    if(props.isSmall)
        className.push("button-sm")
    if(props.btnBlock)
        className.push("button-block")

    return (
        <div>
            <button className={className.join(" ")} >{ props.children }</button>
        </div>
    );
}

Button.propTypes = {
  isPrimary: propTypes.bool,
  isWideMobile: propTypes.bool,
  isSmall: propTypes.bool,
  btnBlock: propTypes.bool,
};

export default Button;