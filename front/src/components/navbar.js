import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { UserContext } from "../App";
import "../App.css";

const NAV_ITEMS = [
  { key: "about", label: "About" },
  { key: "journey", label: "Journey" },
  { key: "skills", label: "Skills & Values" },
  { key: "contact", label: "Contact" },
];

function Navbar() {
  const { isMobile } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const goTo = (key) => {
    setOpen(false);
    const el = document.getElementById(key);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = NAV_ITEMS.map((item) => ({
    key: item.key,
    label: item.label,
    onClick: () => goTo(item.key),
  }));

  return (
    <>
      <header className="anm-navbar">
        <div className="anm-navbar-inner">
          <div className="anm-brand" onClick={() => goTo("hero")}>
            Ann Njeri <span>Maina</span>
          </div>

          {!isMobile && (
            <Menu
              mode="horizontal"
              items={menuItems}
              selectable={false}
              className="anm-navmenu"
            />
          )}

          {isMobile && (
            <Button
              type="text"
              className="anm-nav-toggle"
              icon={<MenuOutlined />}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            />
          )}
        </div>
      </header>

      <Drawer
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        closeIcon={<CloseOutlined />}
        title="Menu"
        width={260}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          selectable={false}
          style={{ border: "none" }}
        />
      </Drawer>

      <main className="anm-page">
        <Outlet />
      </main>
    </>
  );
}

export default Navbar;
