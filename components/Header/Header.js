import Link from 'next/link';
import Head from 'next/head';

import HeaderStyled from './Header.styled'


export default function Header(props){
    return(
        <header className="header" >
            <style jsx>{HeaderStyled}</style>
            <Head>
                <title>{props.title}</title>
                <link rel="stylesheet" href="/styles/page.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
            </Head>
            <Link href="/">
                <a>
                    <img alt="Logo" src="/img/logo.svg?1" />
                </a>
            </Link>
        </header>
    )
}