import React from 'react'

function Card() {
  return (
    React.createElement(
      "div",
      { style: { height: "450px", width: "30%", margin: "180px auto", boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" } },
      React.createElement(
        "div",
        { style: { display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "20px" } },
        React.createElement("img", { src: "https://s.wsj.net/public/resources/images/ED-AV942A_epste_GR_20161229154630.jpg", alt: "", style: { width: "150px", height: "150px", borderRadius: "100%" } })
      ),
      React.createElement(
        "div",
        { style: { display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" } },
        React.createElement(
          "div",
          { className: "text", style: { lineHeight: ".5", textAlign: "center" } },
          React.createElement(
            "h1",
            { style: { color: "GrayText" } },
            "Edward Snowden"
          ),
          React.createElement(
            "p",
            { style: { fontSize: "1.2rem" } },
            "I enjoy drinking a cup of coffe everyday"
          )
        ),
        React.createElement(
          "div",
          { className: "foll", style: { display: "flex", alignItems: "center", justifyContent: "center", gap: "30px" } },
          React.createElement(
            "div",
            { style: { display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", lineHeight: "0" } },
            React.createElement(
              "p",
              { style: { color: "#9c47e4", fontWeight: "bold", fontSize: "1.2rem" } },
              "140"
            ),
            React.createElement(
              "p",
              { style: { color: "#aaabac", fontWeight: "bold", fontSize: "1.2rem" } },
              "Posts"
            )
          ),
          React.createElement(
            "div",
            { style: { display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", lineHeight: "0" } },
            React.createElement(
              "p",
              { style: { color: "#9c47e4", fontWeight: "bold", fontSize: "1.2rem" } },
              "140"
            ),
            React.createElement(
              "p",
              { style: { color: "#aaabac", fontWeight: "bold", fontSize: "1.2rem" } },
              "Followers"
            )
          ),
          React.createElement(
            "div",
            { style: { display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", lineHeight: "0" } },
            React.createElement(
              "p",
              { style: { color: "#9c47e4", fontWeight: "bold", fontSize: "1.2rem" } },
              "140"
            ),
            React.createElement(
              "p",
              { style: { color: "#aaabac", fontWeight: "bold", fontSize: "1.2rem" } },
              "Following"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "buts", style: { marginTop: "20px" } },
          React.createElement(
            "button",
            { style: { padding: ".5rem 1.2rem", backgroundColor: "#9c47e4", border: "none", borderRadius: "10px", fontSize: "1.5rem", color: "white" } },
            "Follow"
          ),
          "\xA0\xA0",
          React.createElement(
            "button",
            { style: { padding: ".5rem 1.2rem", backgroundColor: "#e13a9d", border: "none", borderRadius: "10px", fontSize: "1.5rem", color: "white" } },
            "Message"
          )
        )
      )
    )
    
    
  )
}

export default Card