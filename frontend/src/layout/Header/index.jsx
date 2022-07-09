import { Link } from "react-router-dom";
import { SwipeableDrawer } from "@mui/material";
import { MdClose, MdMenu, MdMenuOpen } from "react-icons/md";
import { AnimatedButton } from "../../components/AnimatedButton";
import logoSvg from "../../assets/img/logo.svg";
import "./styles.scss";
import { useState } from "react";
import { UserInfo } from "../../components/UserInfo";
import { useAuth } from "../../providers/AuthProvider";
import { isObjectEmpty } from "../../utils/object";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, onLogout } = useAuth();

  const toggleMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  const logout = () => {
    onLogout();
    window.location.reload();
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logoSvg} alt="Logo AlugaVerso" />
      </Link>
      <button className="header__menu-button" onClick={toggleMenu}>
        {menuOpen ? <MdMenuOpen /> : <MdMenu />}
      </button>

      <SwipeableDrawer
        className="header__drawer"
        anchor="top"
        open={menuOpen}
        onOpen={() => {}}
        onClose={() => setMenuOpen(false)}
      >
        <div className="header__drawer__content">
          <div className="header__drawer__content__header">
            <button
              className="header__drawer__content__header__close-button"
              onClick={toggleMenu}
            >
              <MdClose />
            </button>
            {!isObjectEmpty(user) && (
              <div className="header__drawer__content__header__user-info">
                <UserInfo mobile onLogout={onLogout} userName={user.name} />
                {/* MENU */}
              </div>
            )}
          </div>
          <nav className="header__drawer__content__nav">
            <Link
              className="header__drawer__content__nav__link"
              to="/your-land"
            >
              Cadastre seu terreno
            </Link>

            {!isObjectEmpty(user) ? (
              <button
                className="header__drawer__content__nav__logout"
                onClick={logout}
              >
                Encerrar a sessão
              </button>
            ) : (
              <>
                <Link
                  className="header__drawer__content__nav__link"
                  to="/login"
                >
                  Entre
                </Link>
                <Link
                  className="header__drawer__content__nav__link"
                  to="/register"
                >
                  Cadastre-se
                </Link>
              </>
            )}
          </nav>
        </div>
      </SwipeableDrawer>

      <nav className="header__nav">
        <Link className="header__nav__highlight" to="/your-land">
          <AnimatedButton lit={true} width="181px">
            Cadastre seu terreno
          </AnimatedButton>
        </Link>
        {!isObjectEmpty(user) ? (
          <UserInfo userName={user.name} onLogout={onLogout} />
        ) : (
          <>
            <Link className="header__nav__link" to="/register">
              <AnimatedButton width="124px">Cadastre-se</AnimatedButton>
            </Link>
            <Link className="header__nav__link" to="/login">
              <AnimatedButton width="124px">Entre</AnimatedButton>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
