import React from 'react';
import styles from './MainStructure.scss';
import classNames from 'classnames/bind'
import HeaderContainer from 'containers/HeaderContainer';
import Footer from '../../components/structure/Footer';

const cx = classNames.bind(styles);

const MainStructure = ({ children }) => (
    <div>
        <HeaderContainer/>
        <main>{children}</main>
        <Footer/>
    </div>
);

export default MainStructure;