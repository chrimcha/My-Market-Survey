import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>Apologies!</h1>
            <p>An unexpected error has occurred with this page:</p>
            <p>
                <i>{error.status +' '+ error.statusText || error.message}</i>
            </p>
        </div>
    );
}