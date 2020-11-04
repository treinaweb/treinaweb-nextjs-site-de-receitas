import HeaderStyled from '../Header/Header.styled'

export default function Footer(){
    return(
        <footer className="footer" >
            <style jsx>{HeaderStyled}</style>
            &copy; TreinaCook
        </footer>
    )
}