import "../../stylesheets/about.css";
const About = () => {
  return (
    <>
      <section id="about-us" className="about grid">
        <img
          src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
          alt="About us"
        />
        <div className="about-div">
          <h2>
            Get to know about
            <span> our company</span>
          </h2>
          <p>
            Discover Flomitech Innovations Limited, based in the vibrant city of
            Kisumu. We are a forward-thinking and innovative company committed
            to pushing the boundaries of technology and creating solutions that
            make a difference. With a strong focus on excellence, our dedicated
            team of experts thrives on turning ideas into reality. We take pride
            in our commitment to harnessing technology for positive change,
            empowering businesses and communities alike. Join us on a journey of
            innovation, where every challenge is an opportunity, and where the
            future is shaped by our passion for technology and progress. Visit
            us in Kisumu to experience firsthand the spirit of Flomitech
            Innovations Limited, where innovation knows no bounds
          </p>
          <button className="button">Contact</button>
        </div>
      </section>
      <section className="about-section">
        <div className="about-title">
          <h1>
            What they say <span> about us</span>
          </h1>
          <p>
            Discover what our valued clients have to say about their experiences
            with us.
          </p>
        </div>
        <div className="about-us grid">
          <div>
            <img
              src="https://images.unsplash.com/photo-1514794749374-fb67509dbb7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="Client 1"
            />
            <h3>Catherine Joy</h3>
            <span>CEO, Tech Innovations</span>
            <p>
              "Flomitech Innovations has been an invaluable partner in our
              journey. Their innovative solutions and exceptional service have
              propelled our business to new heights."
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1517499610481-9bc77847c8b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="Client 2"
            />
            <h3>James Okumu</h3>
            <span>Founder, Digital Ventures</span>
            <p>
              "Flomitech Innovations not only delivers exceptional solutions but
              also understands the unique needs of our business. Their
              commitment to excellence is truly commendable."
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
