import {getPlayers} from '@lib/mongo/players/player_cs'

async function fetchPlayers() {
    const {players} = await getPlayers()
    return players
}

export default async function About() {
    const players = await fetchPlayers()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ul>
            {players.map(player => (
                <li key={player._id}>{player.name}</li>
            ))}
        </ul>
    </main>
  )
}
