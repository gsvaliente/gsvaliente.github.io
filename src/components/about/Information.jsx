export const Information = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-line-chart about__icon"></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">MBA International Business</span>
      </div>

      <div className="about__box">
        <i className="bx bx-conversation about__icon"></i>
        <h3 className="about__title">Languages</h3>
        <span className="about__subtitle">English & Spanish</span>
      </div>

      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Projects</h3>
        <span className="about__subtitle">5 + Projects</span>
      </div>
    </div>
  );
};
