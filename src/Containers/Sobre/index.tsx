import Titulo from "../../Components/Titulo";
import Paragrafo from "../../Components/Paragrafo";
import { GithubSection } from "./style";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.Enim vitae hic, sed consequatur eum excepturi?
      Veniam unde officia debitis tenetur obcaecati, sapiente, voluptatibus deleniti quibusdam cupiditate ad deserunt
      non animi!
    </Paragrafo>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=chathiago&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=chathiago&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSection>
  </section>
)

export default Sobre
