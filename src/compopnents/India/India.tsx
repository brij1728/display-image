import { default as image1 } from "../../assets/india.jpg";
import { default as image2 } from "../../assets/tajmahal.jpg";
export const India = () => {
  return (
    <div>
      <div>India</div>
      <div style={{ width: "100%", height: "100%" }}>
        <img src={image1} alt="india" />
      </div>
      <div style={{ width: "100%", height: "100%" }}>
        <img src={image2} alt="Tajmahal" />
      </div>
    </div>
  );
};
