import React from 'react';
import {Header} from "../Header/Header";

import "./Logout.scss"
import {Decoration} from "../shared/Decoration/Decoration";

export const Logout = () => {
    return (
        <>
            <Header/>
            <form>
                <div className="container-logout">
                    <div className="statement-logout">Wylogowanie nastąpiło<br/>pomyślnie!</div>
                    <Decoration />
                    <div className="button-main-page">Strona głowna</div>
                </div>
            </form>
        </>
    );
};