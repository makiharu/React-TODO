import React, { useState } from "react";

/**
 * パスワード再確認用 入力フォーム
 */
// TODO 文字数制限チェックを追加
function PasswordInput(props) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const maxLength = props.maxDigits;

  const isMatching = () => {
    return password === confirmPassword;
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleconfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div>
      <div>
        <p>半角数字{maxLength}桁で入力してください。</p>
        <label>
          パスワード:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
      </div>

      <div>
        <label>
          パスワード再確認:
          <input
            type="password"
            value={confirmPassword}
            onChange={handleconfirmPasswordChange}
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
