import { doSocialLogin } from "@/app/utils/action";

const LoginForm = () => {
  return (
    <form action={doSocialLogin}>
        <button className=" flex justify-center items-center px-16 py-4 rounded-[10px] bg-[#1E2124] text-[#fff]"  type="submit" name="action" value="discord">
          Discord
        </button>
      
    </form>
  )
}

export default LoginForm