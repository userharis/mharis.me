const Logo = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 0H35.7143V21.4286H42.8571V0H50V50H42.8571V28.5714H35.7143V50H28.5714V7.14286H21.4286V50H14.2857V7.14286H7.14286V50H0V0Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Logo;
