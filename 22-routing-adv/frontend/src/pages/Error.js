import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    //long helper
    message = JSON.parse(error.data).message;

    //short helper
    //message = error.data.message;
  }

  if(error.status === 404) {
    title = 'Not found!';
    message = "Couldnt find resource or page";
  }

  return (
    <>
    <MainNavigation/>
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
    </>
  );
}

export default ErrorPage;

//if we throw an error response, the error object includes
//  a status of the response (eg. 500)
