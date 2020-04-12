import React, { FC } from 'react';
import styles from './item.less';
import { connect, ItemModelState, ConnectProps } from 'umi';
import { Row, Col } from 'antd';


interface PageProps extends ConnectProps {
  item: ItemModelState
}

const Item: FC<PageProps> = ({ item }) => {
  const { items = [] } = item;
  return (
    <Row>
      {/* {items.map(item => (
        <Col key={item.ename} span={3} className={styles.heroitem}>
          <img src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`} />
          <p>{item.cname}</p>
        </Col>
      ))} */}
      {
        items.map(item => (
          <Col key={item.ename} span={3} className={styles.heroitem}>
            <img src={`https://game.gtimg.cn/images/yxzj/img201606/itemimg/${item.item_id}.jpg`} />
            <p>{item.cname}</p>
          </Col>
        ))
      }
    </Row>
  );
}

export default connect(
  ({ item }: { item: ItemModelState }) => ({ item })
)(Item)
