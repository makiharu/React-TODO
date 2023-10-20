const Confirm = () => {
  return (
    <>
      <div className="main-wrapper confirm">
        <div className="main">
          <h2>お問い合わせフォーム</h2>
          <p>メールアドレス</p>
          <input type="text" />
          <p>内容</p>
          <textarea />
          <input type="submit" value="送信" />
        </div>
      </div>
    </>
  );
};

export default Confirm;
