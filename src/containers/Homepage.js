import React from "react";
// import homepageImage from "../img/illustration-homepage-T2.jpg";
import profilePic from "../img/Julie-profilePic.png";

const Homepage = () => {
  return (
    <main className="homepageContent">
      <img src={profilePic} alt="" />
      <div>
        <h1>Hi, I'm Julie.</h1>
        {/* <h2>DEVELOPPEUSE | EX-MARKETEUSE </h2> */}
        <p>
          Ex-marketer en reconversion vers le côté obscur (
          <span role="img" aria-label="developper">
            👩‍💻
          </span>
          ). Développement web/mobile, marketing, design, stratégie... On a
          sûrement des choses à se dire sur votre prochain projet !
        </p>
        <p>
          Sinon, en ce moment je recherche un stage/poste de Web Developer JS
          Fullstack (Oct. 2020){" "}
          <span role="img" aria-label="unicorn">
            🦄
          </span>
        </p>
      </div>

      {/* <img src={walkingGif} alt="" style={{ height: 300 }} /> */}
      {/* <img src={homepageImage} alt="" style={{ height: 500 }} /> */}

      {/* <img src={walkingGif} alt="" />
      <h1>Hi, I'm Julie</h1>
      <h2>Developer | Designer | Ex-marketer </h2> */}
      {/* <div>A propos ● Projets ● Contact</div> */}
    </main>
  );
};

export default Homepage;
