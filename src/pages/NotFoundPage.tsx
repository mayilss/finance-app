import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="text-center bg-bg dark:bg-bg-dark min-h-screen p-4">
      <h1 className="text-3xl font-bold text-text-primary dark:text-text-primary-dark">
        404 - Page Not Found
      </h1>
      <p className="my-4 text-text-secondary dark:text-text-secondary-dark">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="text-primary hover:text-primary-hover dark:text-primary-dark dark:hover:text-primary-hover-dark underline"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
