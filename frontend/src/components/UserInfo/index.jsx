import { MdLogout } from "react-icons/md";
import "./styles.scss";
import { getUserInitials } from '../../utils/user'

export function UserInfo({ userName, onLogout, mobile = false }) {
  
  const mobileClass = mobile ? 'mobile' : '';
  const userInitials = getUserInitials(userName)

  const handleLogout = () => {
    onLogout();
  }

  return (
    <span className={`user-info ${mobileClass}`}>
      <span className="user-info__avatar">{userInitials}</span>
      <span className="user-info__greeting">Olá,</span>
      <span className="user-info__name">{userName}</span>
      {!mobile && (
        <button onClick={handleLogout} className="user-info__logout-button">
          <MdLogout />
        </button>
      )}
    </span>
  );
}
