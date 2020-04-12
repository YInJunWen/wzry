import React, { FC } from 'react';
import styles from './summoner.less';
import { connect, SummonerModel, ConnectProps } from 'umi';
import { SummonerModelState } from '@/models/summoner';

interface PageProps extends ConnetcProps {
  summoner: SummonerModel
}

const Summoner: FC<SummonerModel> = (props) => {
  return (
    <div>
      <h1 className={styles.title}>Page summoner</h1>
      <h2>{JSON.stringify(props.summoner)}</h2>
    </div>
  );
}

export default connect(({ summoner }: { summoner: SummonerModelState }) => ({ summoner }))(Summoner)

