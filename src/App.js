import React from 'react';
import YTNails from './YTNails.js';
import banner from './banner.png';
import {
  //Breadcrumb,
  //Button,
  Image,
  Layout,
  //Menu,
  Typography
} from 'antd';
import './App.css';

const {
  //Header,
  Footer,
  //Sider,
  Content
} = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 50px'; maxWidth: '1200px'; }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Image alt="Overkill Projects Limited" src={banner} preview={false} />
        <Title level={5} style={{padding: '10px 10px'}}>
          Here at Overkill Projects, we help businesses and individuals take their ideas from concept to reality. Whatever your technology needs, we have the domain experience necessary to help you achieve your goals.
        </Title>
        <Title level={3} style={{padding: '10px 10px'}}>Services:</Title>
        <Title level={5} style={{padding: '10px 10px'}}>
        <ul>
          <li>Prototyping and MVP design</li>
          <li>Circuit design</li>
          <li>PCB design and analysis</li>
          <li>Device optimization</li>
          <li>Manufacturing and assembly</li>
          <li>Consultation services</li>
        </ul>
        </Title>
        <Title level={3} style={{padding: '10px 10px'}}>Contact:</Title>
        <Title level={5} style={{padding: '10px 10px'}}>Feel free to reach out to us anytime by <a href='mailto:overkill.projects.limited@gmail.com'>email</a> or by phone at <a href={'tel:+18564055932'}>856 405 5932</a>.</Title>
        <Title level={3} style={{padding: '10px 10px'}}>Latest from the YouTube channel:</Title>
        <YTNails />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Overkill Projects Limited ©2021</Footer>
    </Layout>
  );
}

export default App;
