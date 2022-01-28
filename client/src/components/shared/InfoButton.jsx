import PropTypes from "prop-types";

function InfoButton({title, text}) {
  return (
    // TODO - bring it closer to the parent component
    <div className="flex flex-row-reverse">
      <div className="dropdown dropdown-end">
        <div tabIndex="0" className="btn btn-circle btn-ghost btn-xs text-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline w-5 h-5 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div tabIndex="0" className="shadow card compact dropdown-content bg-base-100 rounded-box w-52">
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

InfoButton.defaultProps = {
  title: "Helper",
  text: "Helping Information goes here",
};

InfoButton.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default InfoButton;






