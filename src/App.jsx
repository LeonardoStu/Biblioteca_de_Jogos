import Game from "./Components/Game"
import NewGameForm from "./Components/NewGameForm"
import useGameCollection from "./hooks/useGameCollection"

export default function App(){

  const {game, addGame, removeGame} = useGameCollection()
  
  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <NewGameForm addGame={addGame} />
      <div className="games">
        {game.length > 0 
        ? (game.map((game) => (
          <Game 
            key={game.id}
            title={game.title}
            cover={game.cover}
            onRemove={() => removeGame(game.id)}
          />)))
          : (
            <h2 style={{margin:'4rem'}}>Biblioteca Vazia. Adicione um jogo</h2>
         )}
      </div>
    </div>
  )
}