const Alert = ({ text }) => {
  return (
    <div role="alert" className="alert alert-success alert-dash">
      <span>{text}</span>
    </div>
  );
};

export default Alert;
