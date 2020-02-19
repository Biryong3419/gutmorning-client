import React from 'react';
import styles from './MainStructure.scss';
import classNames from 'classnames/bind'
import HeaderContainer from 'containers/HeaderContainer';
import BaseContainer from 'containers/BaseContainer'
import Footer from '../../components/structure/Footer';

const cx = classNames.bind(styles);

const MainStructure = ({ children }) => (
    <div>
        <BaseContainer />
        <HeaderContainer/>
        <main>{children}</main>
        <Footer/>
    </div>
);

export default MainStructure;