import { FaBeer } from "react-icons/fa";

const IconComponent = () => {
  return (
    <div style={{ background: "pink" }}>
      <FaBeer />
      <FaBeer size={0} />
      <FaBeer size={100} color="gold" />
    </div>
  );
};

export default IconComponent;
