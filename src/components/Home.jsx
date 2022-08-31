import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handelSubmit = e => {
        e.preventDefault()
        const inputValue = e.target.name.value.trim()

        if(inputValue.length!==0){
          dispatch(setNameTrainer(inputValue))
          navigate('/pokedex')
        }
        e.target.name.value=""

    }

  return (
    <div className='home'>
      <div className='home_title1'></div>
      <div className='home_title2'></div>
      <img className='home__img' src="./images/pokedex.png" alt="" />
   
    <section className='home__intoduction'>
        <h1 className='home__title-text'>Hi Trainer!</h1>
        <p className='home__description'>To Start give me your trainer name</p>
        
        <form className='home__form' onSubmit={handelSubmit}>
            <input className='home__input' placeholder='Enter your name' id='name' type="text" />
            <button className='home__btn'>Catch them all</button>
        </form>
    </section>
    </div>
  )
}

export default Home