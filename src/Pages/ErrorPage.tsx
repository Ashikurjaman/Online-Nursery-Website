import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Oops!</h1>
            <p className="py-6">Sorry, an unexpected error has occurred.</p>
            <p className="py-6">
              <i>{error.statusText || error.message}</i>
            </p>
            <button className="btn btn-primary">Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
