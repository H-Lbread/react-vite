import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet,useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Page 1', '/page1', <PieChartOutlined />),
  getItem('Page 2', '/page2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigateTo = useNavigate()
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuClick = (e) => {
    // 点击跳转到对应的路由  e.key
    navigateTo(e.key)
    
  }

  const [openKeys, setopenKeys] = useState(['']);   // 第一个参数：定义变量； 第二个参数：修改变量

  const handleChange = (keys:String) => {
    // 展开 回收 时执行的代码
    // console.log(keys); // 数组 记录了当前展开的菜单
    
    setopenKeys([keys[keys.length-1]])
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu 
            theme="dark" 
            defaultSelectedKeys={['/page1']} 
            mode="inline" 
            items={ items } 
            onClick={ menuClick } 
            onOpenChange={ handleChange }
            // 当前菜单展开项的key数组
            openKeys={ openKeys }
        />
      </Sider>
      <Layout>
        <Header style={{ padding: '0 0 0 16px', background: colorBgContainer }} >
            <Breadcrumb style={{ lineHeight:'64px' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
        </Header>
        <Content style={{ margin: '16px 16px' }} className="site-layout-background">
            {/* 窗口部分 */}
            <Outlet></Outlet>
        </Content>
        <Footer style={{ textAlign: 'center' ,background:"#fff",padding:0,lineHeight:'48px'  }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default View;