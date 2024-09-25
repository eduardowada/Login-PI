import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'



function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  let navbarComponent
  

  return (
    <>
     <div className='w-full bg-orange-400 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Projeto +PraTi</Link>

            <div className='flex gap-5'>
            <div className='hover:underline'>Home</div>
            <Link to='/temas' className='hover:underline'>Suporte</Link>
              <div className='hover:underline'>Login</div>
              <div className='hover:underline'>Contato</div>
              <div className='hover:underline'>Eventos</div>
              <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar