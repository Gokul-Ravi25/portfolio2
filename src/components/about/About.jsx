import "./about.css";
import laptop from "../../img/laptop.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={laptop}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        It is a long story and it is going to get continued as a web developer.
        </p>
        <p className="a-desc">
        It’s good to have you on my portfolio website where you will be seeing my previous work which I did. 
        The amount of interest and passion I had for UI/UX development and backend API development always kept me motivated. 
        The support from my loved ones made me to work with full energy. 
        Last but not least I have to thank my self for being consistent over my passion.
        </p>
        <div className="a-award">
          {/* <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div> */}
            <span className="a-award-title"> "Wakeup Determinded and got to bed Statisfied" </span>
        </div>
      </div>
    </div>
  );
};

export default About;
