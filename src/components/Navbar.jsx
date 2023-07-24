import MainNavbar from "./MainNavbar";
import SubNavbar from "./SubNavbar";

function NavbarComponent() {
  return (
    <div className="sticky-top">
      <MainNavbar />
      <SubNavbar />
    </div>
  );
}

export default NavbarComponent;
