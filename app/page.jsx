import { SelectTeam } from '@/components/home/SelectTeam'
import { TeamsRecomendations } from '@/components/home/TeamsRecomendations'

export default function Home() {

  return (
    <div id='home'>
      <TeamsRecomendations/>
      <SelectTeam />
    </div>
  )
}
