import { MainHeader } from "../mainHeader";
import { MainMenu } from "../mainMenu";
import { TopHeader } from "../topHeader";
import "./header.css";
const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <div className="header-area">
          <TopHeader />
          <MainHeader />
          <MainMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
