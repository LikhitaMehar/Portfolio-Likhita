import React from "react";

const description =
  "I am currently pursuing my Btech 3rd Year In computer Science and Information Technology";

const Education = () => {
    return(
        <section className="light" id="education">
            <div
            style={{
            backgroundColor: "white",
            width: "50%",
            padding: "4rem",
            margin: "3rem auto",
            textAlign: "center",
        }}
        >
         <h2>Education</h2>
         <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
        </ul>
        <hr />   
        </div>
        </section>
    )
}

export default Education;