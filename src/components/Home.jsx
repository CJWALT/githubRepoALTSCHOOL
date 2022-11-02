import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container">
        <main>
          <h2>
            THE HOME FOR ALL DEVELOPERS -- <br /> including you.
          </h2>
          <p>
            Welcome to my github repositories page, Where you can find all the
            repositories in my github portfolio{" "}
            <Link to="/FetchRepo" className="btn">
              repositories
            </Link>
          </p>
        </main>
      </div>
    </>
  );
};

export default Home;
