import { useState } from "react"

export default function useGameCollection (){
    const [game, setGame] = useState(() => {
        const storageGames = localStorage.getItem('obc-game-lib')
        if(!storageGames) return []
        return JSON.parse(storageGames)
      })
    
    
      const addGame = ({title, cover}) => {
        const id = Math.floor(Math.random() * 1000000)
        const game = {id, title, cover}
        setGame(state => {
          const newState = [...state, game]
          localStorage.setItem('obc-game-lib', JSON.stringify(newState))
          return newState
        })
      }
    
      const removeGame = (id) => {
        setGame(state => {
          const newState = state.filter(game => game.id !== id)
          localStorage.setItem('obc-game-lib',JSON.stringify(newState))
          return newState
        })
      }
    
    return {game, addGame, removeGame}
}