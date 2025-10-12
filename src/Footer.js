import "./Footer.css";

function Footer(props) {
  const array = props.menuOptions.map((column, i) => (
    <div className="footer-column" key={i}>
      <h2 className="footer-headings">{column.heading}</h2>
      <hr></hr>
      {column.options.map((option, index) => (
        <div className="footer-option" key={index}>
          <a href="#">{option}</a>
        </div>
      ))}
    </div>
  ));

  return (
    <>
      <div className="footer">{array}</div>
    </>
  );
}

export default Footer;
