const Container = ({ children, maxWidth, className }) => {
  return (
    <div
      className={className}
      style={{ maxWidth: maxWidth || "1040px", width: "95%", margin: "0 auto" }}
    >
      {children}
    </div>
  );
};

export default Container;
