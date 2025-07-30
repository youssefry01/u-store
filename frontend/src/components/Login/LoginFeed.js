import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../features/auth/authSlice'
import usePersist from '../../hooks/usePersist'
import { useLoginMutation } from '../../features/auth/authApiSlice';
import Loading from '../General/Loading'

const LoginFeed = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userRef = useRef()
  const errRef = useRef()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [persist, setPersist] = usePersist()

  const [login, { isLoading }] = useLoginMutation()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [username, password])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { accessToken } = await login({ usernameOrEmail: username, password }).unwrap();
      dispatch(setCredentials({ accessToken }))
      setUsername('')
      setPassword('')
      navigate('/')
    } catch (err) {
      if (!err.status) {
        setErrMsg('No Server Response');
      } else if (err.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg(err.data?.message);
      }
      if (errRef.current) {
        errRef.current.focus();
      }
    }
  };

  const handleUserInput = (e) => setUsername(e.target.value)
  const handlePwdInput = (e) => setPassword(e.target.value)
  const handleToggle = () => setPersist(prev => !prev)

  const errClass = errMsg ? "text-center bg-white dark:bg-gray-900 text-[firebrick] p-[0.25em] mb-[0.5em]" : "offscreen"

  if (isLoading) return <Loading />

  return (
    <div className="flex items-center my-44 bg-white dark:bg-gray-900">  
      <div className="container mx-auto max-w-md my-10">
        <div className="text-center">
          <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign in</h1>
          <p className="text-gray-500 dark:text-gray-400">Sign in to access your account</p>
        </div>
        <div className="m-7">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="username" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Username</label>
              <input
                type="text"
                name="usernameOrEmail"
                id="username"
                ref={userRef}
                placeholder="Username or Email"
                value={username}
                onChange={handleUserInput}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={handlePwdInput}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>

            <label htmlFor="persist" className="flex w-full gap-2 text-gray-600 dark:text-gray-400 text-md items-center mb-4">
                <input type="checkbox" className="size-6" id="persist" onChange={handleToggle} checked={persist}/> Remember Me
            </label>

            <p ref={errRef} className={errClass}>{errMsg}</p>

            <div className="mb-6">
              <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                Sign in
              </button>
            </div>

          </form>
          
        </div>
      </div>
    </div>
  );
};

export default LoginFeed;