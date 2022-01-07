import { useState } from 'react'
import {NavBar, Welcome, Footer, Services, Transactions} from './components'
import './App.css'

export default function App() {
  return (
    <div className='min-h-screen'>
    <div className='gradient-bg-welcome'>
      <NavBar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
    </div>
  )
}