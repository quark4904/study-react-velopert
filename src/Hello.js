import React from "react";

// function Hello(props) {
//   console.log(props);
//   return (
//     <>
//       <h1 style={{ color: props.color }}>Hello, {props.name}</h1>
//     </>
//   );
// }

function Hello({ name, color, isSpecial }) {
  return (
    <>
      <h1 style={{ color }}>
        {isSpecial && <b>*</b>}Hello, {name}
      </h1>
    </>
  );
}

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
