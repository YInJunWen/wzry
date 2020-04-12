import { Layout, Menu } from 'antd';
import { Link } from 'umi';
const { Header, Content, Footer } = Layout;

import styles from './index.less';


function BasicLayout(props) {
    // console.log(props);
    //从属性中取出当前的路由
    // const location = props.location;
    // const pathname = location.pathname;
    const {
        location: { pathname },
        children
    } = props;
    const menuData = [
        {
            router: 'hero',
            name: '英雄'
        }, {
            router: 'item',
            name: '局内道具'
        }, {
            router: 'summoner',
            name: '召唤师技能'
        }
    ];
    return (
        <Layout>
            <Header>
                <div className={styles.logo}>王者荣耀资料库 </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[pathname]} style={{ lineHeight: '64px' }}>
                    {
                        menuData.map(item => {
                            return (
                                <Menu.Item key={`/${item.router}`}>
                                    <Link to={`${item.router}`}>{item.name}</Link>
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Created by Umi + Ant Desgin</Footer>
        </Layout>
    );
}

export default BasicLayout;