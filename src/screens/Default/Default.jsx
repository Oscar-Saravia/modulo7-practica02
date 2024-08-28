import Description from "./_components/Description";
import Logo from "./_components/Logo";
import OpenLink from "../../components/OpenLink";

const Default = () => {
  return (
    <>
      <header className="App-header">
        <Logo />
        <Description />
        <OpenLink title="Learn React" url="https://react.dev/" />
        <OpenLink
          title="Mi proyecto react (Github)"
          url="https://github.com/Oscar-Saravia"
        />
      </header>
    </>
  );
};

export default Default;
