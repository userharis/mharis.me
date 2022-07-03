const Container = ({ children, maxWidth = "1280px", className }) => {
  return (
    <div
      style={{ width: "97%", maxWidth, margin: "0 auto" }}
      className={className}
    >
      {children}
    </div>
  );
};

export default Container;
