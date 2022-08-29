function SignInPage(props) {
  return (
    <div>
      Enter your account:
      <form>
        <div>
          <lable>Email: </lable>
          <input type="email" />
        </div>
        <div>
          <lable>Password: </lable>
          <input type="password" />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default SignInPage;
