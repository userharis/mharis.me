const Logo = ({ className }) => {
  return (
    <div className={className}>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H28.5714V17.1429H34.2857V0H40V40H34.2857V22.8571H28.5714V40H22.8571V5.71429H17.1429V40H11.4286V5.71429H5.71429V40H0V0Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Logo;
