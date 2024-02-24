import React from "react";
import './Sidebar.css';
import logoSpotify from '../../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe, faBook, faPlus } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div class="sidebar">
        <nav class="sidebar__navigation">
            <div class="logo">
                <a href="">
                <img src={logoSpotify} alt="Logo do Spotify"/>
                </a>
            </div>
            <ul>
                <li>
                    <a href="">
                        <span className="fa-home"><FontAwesomeIcon icon={faHome} /></span>
                        <span>Início</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className="fa-search"><FontAwesomeIcon icon={faSearch} /></span>
                        <span>Buscar</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="library">
            <div class="library__content">
                <button class="library__button">
                    <span className="fa-library"><FontAwesomeIcon icon={faBook} /></span>
                    <span>Sua biblioteca</span>
                </button>
                <span className="faPlus"><FontAwesomeIcon icon={faPlus} /></span>
            </div>
            <section class="section-playlist">
                <div class="section-playlist__content">
                    <span class="text title">Crie sua primeira playlist</span>
                    <span class="text subtitle">É fácil, vamos te ajudar.</span>
                    <button class="section-playlist__button">
                        <span>Criar playlist</span>
                    </button>
                </div>
            </section>
            <section class="section-playlist-2">
                <div class="section-playlist-2__content">
                    <span class="text-2 title-2">Que tal seguir um podcast novo?</span>
                    <span class="text-2 subtitle-2">Avisaremos você sobre novos episódios.</span>
                    <button class="section-playlist-2__button">
                        <span>Explore podcasts</span>
                    </button>
                </div>
            </section>
            <div class="cookies">
                <a href="#">Legal</a>
                <a href="#">Centro de Privacidade</a>
                <a href="#">Política de privacidade</a>
                <a href="#">Cookies</a>
                <a href="#">Sobre anúncios</a>
                <a href="#">Acessibilidade</a>
                <a href="#">Notice at Collection</a>
                <a href="#">Cookies</a>
            </div>
            <div class="languages">
                <button class="languages__button">
                    <span><FontAwesomeIcon icon={faGlobe} /></span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
    </div>
    
        )
};


export default Sidebar;