import logo from "../images/Rawda_linkedin.jpg";
export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header--image-wrapper">
          <img alt="Rawda Yasser" src={logo} />
        </div>
        <h2>Rawda Yasser</h2>
        <h3>Software Developer</h3>
      </div>
    </>
  );
}
