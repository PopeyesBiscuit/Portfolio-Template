import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"
import styles from './css/index.module.css';
import Image from "next/image";

function Index() {

    return (
        <>
            <Nav />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Footer />
        </>
    )

}

export default Index