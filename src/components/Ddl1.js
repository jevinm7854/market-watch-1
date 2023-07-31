import React, { useState } from "react";
import { ButtonComponent, FabComponent } from "@syncfusion/ej2-react-buttons";
import { MenuComponent } from "@syncfusion/ej2-react-navigations";
import { registerLicense } from "@syncfusion/ej2-base";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

function Ddl1() {
  let navigate = useNavigate();
  const navgrid = () => {
    navigate("/stat");
  };

  return (
    <>
      <ButtonComponent onClick={navgrid} style={{ margin: "1%" }}>
        Go to Application
      </ButtonComponent>
      {/* <MenuComponent
        items={menuItems}
        style={{
          backgroundColor: "#8ADDFC",
          margin: "10%",
          textAlign: "center",
        }}
        // onClick={menuclick}
        select={menuclick}
      /> */}
    </>
  );
}

export default Ddl1;
