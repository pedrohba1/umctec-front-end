import SideBar from '@components/SideBar';

const MainLayout = ({ children }) => {
  return (
    <>
      <SideBar />
      {children}
    </>
  );
};

export default MainLayout;
