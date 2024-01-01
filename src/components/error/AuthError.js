/** @format */

import "./error.css"

export default function AuthError({ msg }) {
  return (
    <div className="auth-error">
      <p>{msg}</p>
    </div>
  );
}
