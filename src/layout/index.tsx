import Header from "../components/Header";

type LayoutProps = {
  children: React.ReactNode | React.ReactNode[];
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main
        style={{
          marginTop: "60px",
        }}
      >
        {children}
      </main>
    </>
  );
}

export default Layout;
