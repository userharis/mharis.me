const Container = ({ children, maxWidth = "1040px" }) => {
  return <div style={{ maxWidth }}>{children}</div>;
};

export default Container;
