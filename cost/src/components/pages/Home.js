import styles from './Home.module.css'
import Calculadora from '../../img/calculadora.png'
import LinkButton from './Layout/LinkButton'

function Home(){

    return (
        <section className={styles.Home_container}>
            <h1>Seja bem vindo ao <span>Cost</span></h1>
            <p>Gerencie seus projetos agora mesmo!</p>
            <LinkButton to='/newProject' text="Novo Projeto" />
         <img src={Calculadora} alt="Cost" />
        </section>
    )
}

export default Home