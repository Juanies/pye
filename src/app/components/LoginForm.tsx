import { doSocialLogin } from "@/app/utils/action";

const LoginForm = () => {
  return (
    <form action={doSocialLogin}>
        <button  type="submit" name="action" value="discord">
          Sign in with Discord
        </button>
      
    </form>
  )
}

export default LoginForm