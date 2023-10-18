import React, { useState } from "react";

function PasswordInput(props) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const maxLength = props.maxDigits;

  const isMatching = () => {
    return password === confirmPassword;
  };

  return (
    <div>
      <div>
        <label>
          パスワード:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          パスワード再確認:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
      </div>

      {password.length === maxLength &&
        confirmPassword.length === maxLength &&
        !isMatching() && (
          <div style={{ color: "red" }}>パスワードが一致していません。</div>
        )}
      <hr />
    </div>
  );
}

export default PasswordInput;
