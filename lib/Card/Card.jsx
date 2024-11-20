import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ image, title, description, footer, onClick, children }) => {
  return (
    <div className="card" onClick={onClick}>
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}
        {description && <p className="card-description">{description}</p>}
        {children}
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string, // Image URL for the card
  title: PropTypes.string, // Title text for the card
  description: PropTypes.string, // Description text for the card
  footer: PropTypes.node, // Footer content
  onClick: PropTypes.func, // Optional click handler
  children: PropTypes.node, // Additional content for the card body
};

Card.defaultProps = {
  image: null,
  title: "",
  description: "",
  footer: null,
  onClick: null,
};

export default Card;
