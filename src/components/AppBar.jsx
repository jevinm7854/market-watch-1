import React, { useEffect, useState } from "react";
import {
  AppBarComponent,
  MenuComponent,
} from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { useNavigate } from "react-router-dom";
import DDL_BuySell from "./DDL_BuySell";
import ChartOld from "./ChartOld";
import DDL_Comp from "./DDL_Comp";

function AppBar() {
  const navigate = useNavigate();

  const [BsVisible, SetBsVisible] = useState(false);
  const [chartVis, SetChartVis] = useState(false);
  const [marAdd, setMarAdd] = useState(false);

  const companyMenuItems = [
    {
      text: "BuySell",
    },
  ];
  const productMenuItems = [
    {
      text: "Watchlist+",
    },
  ];
  const aboutMenuItems = [
    {
      text: "Spline",
      //   items: [{ text: "Developer" }],
    },
  ];
  const carrerMenuItems = [
    {
      text: "Chart",
    },
  ];
  const avMenuItems = [
    {
      text: "JM",
      items: [
        {
          text: "Log In",
        },
        { text: "Sign Up" },
      ],
    },
  ];

  const marketMenuItems = [{ text: "MarketWatch" }];

  const navChart = () => {
    SetChartVis(!chartVis);
  };

  const navSpline = () => {
    navigate("/spline");
  };
  const navMarket = () => {
    navigate("/stat");
  };

  const navBuySell = () => {
    SetBsVisible(!BsVisible);
  };

  const navMarAddDel = () => {
    setMarAdd(!marAdd);
  };

  return (
    <div className="control-container">
      <AppBarComponent colorMode="Dark" isSticky="true">
        <ButtonComponent
          cssClass="e-inherit"
          iconCss="e-icons e-menu"
        ></ButtonComponent>
        <MenuComponent
          cssClass="e-inherit"
          items={companyMenuItems}
          onClick={navBuySell}
        ></MenuComponent>
        <MenuComponent
          cssClass="e-inherit"
          items={productMenuItems} //position
          onClick={navMarAddDel}
        ></MenuComponent>
        <MenuComponent
          cssClass="e-inherit"
          items={aboutMenuItems}
          onClick={navSpline}
        ></MenuComponent>
        <MenuComponent
          cssClass="e-inherit"
          items={carrerMenuItems}
          onClick={navChart}
        ></MenuComponent>
        <MenuComponent
          cssClass="e-inherit"
          items={marketMenuItems}
          onClick={navMarket}
        ></MenuComponent>

        <div className="e-appbar-spacer"></div>

        <MenuComponent
          cssClass="e-custom"
          items={avMenuItems}
          id="abc"
        ></MenuComponent>
        <div style={{ marginRight: 10 }}></div>
      </AppBarComponent>
      {BsVisible && <DDL_BuySell />}
      {chartVis && <ChartOld />}
      {marAdd && <DDL_Comp />}
    </div>
  );
}

export default AppBar;
