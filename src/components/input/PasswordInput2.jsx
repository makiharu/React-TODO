import React, { useState } from "react";

/**
 * パスワード再確認用 入力フォーム
 */
// TODO 文字数制限チェックを追加
function PasswordInput2(props) {
  // inputタグのvalue値
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const maxLength = props.maxDigits;

  // 確認用と一致しているかを確認
  const isMatching = () => {
    return password === confirmPassword;
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setPassword(value);
    }
  };

  const handleconfirmPasswordChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setConfirmPassword(e.target.value);
    }
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
            placeholder={`${maxLength}桁で入力`}
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
            placeholder={`${maxLength}桁で入力`}
            onChange={handleconfirmPasswordChange}
          />
        </label>
      </div>

      {password.length === maxLength &&
        confirmPassword.length === maxLength &&
        !isMatching() && (
          <div style={{ color: "red" }}>パスワードが一致していません。</div>
        )}

      {password.length > maxLength && (
        <div style={{ color: "red" }}>
          パスワードは{maxLength}桁以内で入力してください。
        </div>
      )}
      <hr />
    </div>
  );
}

export default PasswordInput2;
