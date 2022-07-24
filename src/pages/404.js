import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Not Found | You are lost</title>
      </Helmet>
      <h1>404 Not Found</h1>
    </>
  );
};

export default NotFoundPage;
