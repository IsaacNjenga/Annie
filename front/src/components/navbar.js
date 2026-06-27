import React from "react";
import { Outlet } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  ReadOutlined,
  BuildOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Header, Content } = Layout;

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const menuItems = [
    { key: "hero", label: "Home", icon: <UserOutlined /> },
    { key: "about", label: "About Me", icon: <SolutionOutlined /> },
    { key: "journey", label: "Experience & Education", icon: <ReadOutlined /> },
    { key: "skills", label: "Skills & Values", icon: <BuildOutlined /> },
    { key: "contact", label: "Contact", icon: <MailOutlined /> },
  ];

  return (
    <Layout style={{ minHeight: "100vh", background: "#fbfbfb" }}>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#ffffff",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
          padding: "0 24px",
        }}
      >
        <div
          className="logo"
          style={{
            fontWeight: 700,
            fontSize: "18px",
            color: "#1890ff",
            letterSpacing: "0.5px",
            cursor: "pointer",
          }}
          onClick={() => scrollToSection("hero")}
        >
          ANN NJERI MAINA
        </div>
        <Menu
          mode="horizontal"
          disabledOverflow
          style={{
            flex: 1,
            justifyContent: "flex-end",
            borderBottom: "none",
          }}
          items={menuItems.map((item) => ({
            ...item,
            onClick: () => scrollToSection(item.key),
          }))}
        />
      </Header>

      <Content style={{ width: "100%" }}>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default Navbar;
