import SideBar from '@components/SideBar';

const MainLayout = ({ children }) => {
  return (
    <>
      <SideBar>{children}</SideBar>
    </>
  );
};

export default MainLayout;
