import loginImage from './assets/img/primary_image.svg'
import googleIcon from './assets/img/google-icon.svg'

function App() {
  return (
    <main className='flex items-center justify-center h-screen'>
      <section className='flex w-full h-full flex-col lg:flex-row'>
        <div className='bg-light-green p-6 flex flex-col items-center justify-center h-full w-full'>
          <img src={loginImage} alt='Login' height={420} width={500} className='w-full max-w-sm' />
        </div>
        <div className='p-6 flex flex-col w-full items-center justify-center'>
          <div className='w-3/6'>
            <p className='text-lg font-semibold mb-2'>Bem-vindo de volta</p>
            <h2 className='text-2xl font-bold mb-6'>Faça login na sua conta</h2>

            <form className='flex flex-col space-y-4'>
              <label className='flex flex-col'>
                <span className='text-sm font-medium mb-1'>E-mail</span>
                <input type='email' placeholder='exemplo@gmail.com' className='border border-dark-20 rounded-md p-2 focus:outline-none focus:border-brand-color' />
              </label>
              <label className='flex flex-col'>
                <span className='text-sm font-medium mb-1'>Senha</span>
                <input type='password' placeholder='0123456789' className='border border-dark-20 rounded-md p-2 focus:outline-none focus:border-brand-color' />
              </label>

              <div className='flex justify-between'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center mb-4'>
                    <input type='checkbox' id='remember-me' className={`form-checkbox h-4 w-4 rounded-full`} />
                    <label htmlFor='remember-me' className={`ml-2 text-sm`}>
                      Lembre de mim
                    </label>
                  </div>
                </div>

                <a href='#' className='text-sm text-brand-color mb-4'>
                  Esqueceu sua senha?
                </a>
              </div>
              <button type='submit' className='bg-brand-color text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-color'>
                Entrar na conta
              </button>
              <button type='button' className='flex items-center justify-center gap-3 bg-dark-10 text-white py-2 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-gray-400'>
                <img src={googleIcon} alt='Google' width={24} height={24} />
                Ou faça login com o Google
              </button>
            </form>
            <p className='text-center mt-5'>
              Não tem uma conta?{' '}
              <a href='#' className='text-brand-color'>
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
