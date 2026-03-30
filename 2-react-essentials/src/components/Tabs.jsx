export default function Tabs({ children, buttons, BtnsContainer = "menu" }) {
  //const BtnContainer = btnsContainer;

  return (
    <>
      <BtnsContainer>{buttons}</BtnsContainer>
      {children}
    </>
  );
}

//setting BtnsContainer=menu makes it so we dont need to
//write it in Examples-Tabs since we do want a menu there
//but if u want a diff type then add it
