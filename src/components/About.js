import aboutImg from "../images/about.jpg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>About BetterFuture</h3>
          <p>
            Dominic Daly is a motivational speaker with lived experience with
            EUPD, dealt with psychiatric units both good and bad, done
            unthinkable things, and is now living happy and well. He wants to
            spread his story to hopefully educate people going into services and
            help people who are currently going through it.
          </p>
          <p>
            He has done lectures at universities and training in private mental
            health services hoping to change the landscape and sigma of not only
            EUPD, but mental health in general.
          </p>
          <a href="mailto:info@betterfutureuk.com" className="btn">
            Contact us
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
