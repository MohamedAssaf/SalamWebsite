import "./AboutUs.css";

function AboutUs({title, description}) {
  return (
    <div className="about-us">
      <h1> {title} </h1>
      <p className="about-us-desc"> {description} </p>
    </div>
  );
}

export default AboutUs;
