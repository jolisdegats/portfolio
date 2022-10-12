import React from "react";
import { LoadImage } from "../components/LoadImage";

const Homepage = () => {
  const profilePic =
    "https://res.cloudinary.com/dqp905mfv/image/upload/v1601623023/portfolio/Julie-profilepic2_qynnoe.png";

  return (
    <main className="homepageContent">
      <LoadImage src={profilePic} alt="profilePic" />

      <div>
        <h1>Hi, I'm Julie.</h1>
        <p>
          Ex-marketer en reconversion vers le côté obscur (
          <span role="img" aria-label="developper">
            👩‍💻
          </span>
          ). Développement web/mobile, marketing, design, stratégie... On a
          sûrement des choses à se dire sur votre prochain projet !
        </p>
        <p>
          Sinon, en ce moment je suis FullStack Software Engineer chez{" "}
          <a style={{ color: "#000" }} href="https://www.govirtuo.com">
            Virtuo
          </a>{" "}
          !{" "}
          <span role="img" aria-label="unicorn">
            🦄
          </span>
        </p>
      </div>
    </main>
  );
};

export default Homepage;
