import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../features/auth/authApiSlice";

const USER_REGEX = /^[a-zA-Z0-9_]+$/
const EMAIL_REGEX = /^\S+@\S+\.\S+$/
const PWD_REGEX = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/

const RegisterFeed = () => {
  const navigate = useNavigate()
  const errRef = useRef()

  const [registerUser, { isLoading, isSuccess, isError, error }] = useRegisterMutation();
  

  const [username, setUsername] = useState('')
  const [validUsername, setValidUsername] = useState(false)
  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [password, setPassword] = useState('')
  const [validPassword, setValidPassword] = useState(false)

  useEffect(() => {
    setValidUsername(USER_REGEX.test(username))
  }, [username])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  }, [email])

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password))
  }, [password])

  useEffect(() => {
    if (isSuccess) {
        setUsername('')
        setEmail('')
        setPassword('')
        navigate('/')
    }
  }, [isSuccess, navigate])

  const onUsernameChanged = e => setUsername(e.target.value)
  const onEmailChanged = e => setEmail(e.target.value)
  const onPasswordChanged = e => setPassword(e.target.value)

  const canSave = [validUsername, validEmail, validPassword].every(Boolean) && !isLoading

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (canSave) {
      await registerUser({ username, email, password })
    }
  }

  const errClass = isError ? "text-center bg-white dark:bg-gray-900 text-[firebrick] p-[0.25em] mb-[0.5em]" : "offscreen"
  const validUserClass = !validUsername && username!=='' ? 'border-[1px] border-[solid] border-[#F00] outline-[1px_solid_#F00]' : ''
  const validEmailClass = !validEmail && email!=='' ? 'border-[1px] border-[solid] border-[#F00] outline-[1px_solid_#F00]' : ''
  const validPasswordClass = !validPassword && password!=='' ? 'border-[1px] border-[solid] border-[#F00] outline-[1px_solid_#F00]' : ''

  return (
    <div className="flex items-center my-44 bg-white dark:bg-gray-900">  
      <div className="container mx-auto max-w-md my-10">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign Up</h1>
            <p className="text-gray-500 dark:text-gray-400">Sign Up to create an account</p>
          </div>
          <div className="m-7">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="username" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={onUsernameChanged}
                  autoComplete="off"
                  required
                  className={`w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 ${validUserClass}`}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={onEmailChanged}
                  autoComplete="off"
                  required
                  className={`w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 ${validEmailClass}`}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password (at least 8 characters and 1 capital letter)"
                  value={password}
                  onChange={onPasswordChanged}
                  autoComplete='off'
                  required
                  className={`w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 ${validPasswordClass}`}
                />
              </div>

              <p ref={errRef} className={errClass} aria-live="assertive">{error?.data?.message}</p>

              <div className="mb-6">
                <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none disabled:opacity-50">
                  Sign Up
                </button>
              </div>

            </form>
            
          </div>
        </div>
    </div>
  );
};

export default RegisterFeed;