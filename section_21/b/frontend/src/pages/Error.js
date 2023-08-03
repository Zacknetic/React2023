import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";
export default function ErrorPage() {
  const error = useRouteError();

  let title = "That's an error";
  let message = "Something went wrong!";

  if (error.status === 404) {
    title = "Page not found";
    message = "The page you are looking for does not exist.";
  } else if (error.status === 500) {
    message = error.data.message;
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
