import React from "react";
import { Link } from "react-router-dom";
import "./NeuroArt.css";

const NeuroArt = () => {
  return (
    <div className="neuroArt-container">
      <div className="content-container">
        <h1 className="neuroart-title">NeuroArt</h1>
        <h3>AI and art</h3>

        <div className="buttons">
          <button
            className="btn"
            onClick={() =>
              window.open("https://github.com/1998KB/portfolio.git", "_blank")
            }
          >
            Repo
          </button>
          <button
            className="btn"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1IZoZ_ku9NMlmE8tKW2zDpf2KiQOT2NG6/view?usp=sharing",
                "_blank"
              )
            }
          >
            Demo
          </button>
          <button
            className="btn"
            onClick={() =>
              window.open(
                "https://blue-sky-0e47a0403.2.azurestaticapps.net",
                "_blank"
              )
            }
          >
            Website
          </button>
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          adipisci facere modi laboriosam magni? Voluptatibus qui laboriosam
          molestiae aspernatur corporis sit animi, earum esse aperiam dolores
          dicta voluptatum sequi veniam quaerat quasi iusto ea accusantium amet
          numquam optio quibusdam nobis! Doloremque illum natus aliquid!
          Similique, inventore sint! Maxime quidem repellendus veniam ipsum
          porro in placeat dolores ea nihil quod officiis ipsa id obcaecati,
          magnam molestias aspernatur sint ullam eaque. Sunt possimus
          laboriosam, in natus tempora odit sapiente repudiandae mollitia,
          tempore enim facilis laborum dolor fugit quia voluptatum beatae,
          tenetur hic perspiciatis repellat! Unde, praesentium obcaecati
          blanditiis temporibus iste doloremque quisquam incidunt voluptate
          dicta id autem, voluptates fuga. Aspernatur rerum error dolorem.
          Perspiciatis temporibus atque corporis sapiente ipsa! Non natus id
          iste quo recusandae, sequi nostrum voluptate quae, nulla commodi ad.
          Quidem accusantium nam deleniti atque nisi unde sed doloremque! Iste
          inventore, consectetur eos explicabo asperiores, beatae ut ullam ab,
          repellendus sed sequi reprehenderit voluptas atque quibusdam eligendi
          nisi officiis laudantium distinctio. Numquam necessitatibus magni
          minus veniam modi a ipsa pariatur totam iste, deserunt cupiditate
          iusto sint maxime perspiciatis sequi dolore voluptate exercitationem.
          Aspernatur quis ipsum autem exercitationem, possimus veritatis, ad
          modi eligendi asperiores consequatur pariatur corrupti commodi? Atque,
          commodi aut!
        </p>
      </div>
      <div className="neuroart-links-container">
        <Link to="/projects" className="linkToProjects">
          <img
            src={require("../../images/projectsLinkLeft.png")}
            alt=""
            className="projectsLinkLeft"
          />
        </Link>
        <Link to="/" className="linkToHome">
          <img
            src={require("../../images/homeLinkLeft.png")}
            alt=""
            className="homeLinkLeft"
          />
        </Link>
      </div>
    </div>
  );
};

export default NeuroArt;
