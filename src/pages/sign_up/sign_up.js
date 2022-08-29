function SignUpPage(props) {
  return (
    <div>
      Create your account:
      <form>
        <div>
          <lable>Name: </lable>
          <input type="text" />
        </div>
        <div>
          <lable>Email: </lable>
          <input type="email" />
        </div>
        <div>
          <lable>Password: </lable>
          <input type="password" />
        </div>
        <div>
          <lable>Confirm password: </lable>
          <input type="password" />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}

export default SignUpPage;
