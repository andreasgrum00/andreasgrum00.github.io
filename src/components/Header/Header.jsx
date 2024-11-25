import styles from './Header.module.css'

function Header()
{

    return (
        <header>
            <nav>
                <a href='/'><span>&lt;</span>andreas<span>/&gt;</span></a>
                <a href="">Início</a>
                <a href="">Projetos</a>
                <a href="">Certificados</a>
                <a href="">Contato</a>
                <a href="https://github.com/andreasgrum00">Github</a>
            </nav>
        </header>
    );
}

export default Header;