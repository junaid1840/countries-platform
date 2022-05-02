import React, { FC } from "react";
import { Link } from "react-router-dom";

export const NotFound: FC = () => {
    return (
        <div>
            <h4>404 Page Not Found</h4>
            <Link to="/"> Go back to homepage </Link>
        </div>
    );
};
