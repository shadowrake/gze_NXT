import {getStaff} from '@lib/mongo/staff'

async function fetchStaff() {
    const {staff} = await getStaff()
    return staff
}

export default async function About() {
    const staff = await fetchStaff()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ul>
          <h1>Staff</h1>
            {staff.map(player => (
                <li key={player._id}>{player.name}</li>
            ))}
        </ul>
    </main>
  )
}