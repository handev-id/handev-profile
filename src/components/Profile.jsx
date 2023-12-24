import { useEffect } from "react";

const Profile = () => {
  return (
    <section className="home" id="home">
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <img src="/0_pp.png" alt="" className="rounded-circle" />
            <div className="app">
              <h1 id="myName" className="fw-bold mt-3">
                Hi I'm Han's
              </h1>
              <h2>Im a Front End Web Developer</h2>
              <p id="myDesc" className="opacity-75 text-light mb-3">
                Enjoys learning new things, committed to the work given, easy to
                adapt
                <hr className="mt-2" />
              </p>
              <a href="https://www.instagram.com/hannn.t7_/">
                <i className="fa-brands fa-instagram mx-2 fs-5"></i>
              </a>
              <a href="https://www.instagram.com/hannn.t7_/">
                <i className="fa-brands fa-facebook mx-2 fs-5"></i>
              </a>
              <a href="https://github.com/idhannn">
                <i className="fa-brands fa-github mx-2 fs-5"></i>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=6285770274043&text&type=phone_number&app_absent=0">
                <i className="fa-brands fa-whatsapp mx-2 fs-5"></i>
              </a>
              <br />
              <br />
            </div>

            <a href="https://api.whatsapp.com/send/?phone=6285770274043&text&type=phone_number&app_absent=0">
              <div className="btn fw-bold">Contact Me</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
