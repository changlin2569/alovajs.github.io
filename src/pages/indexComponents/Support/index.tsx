import Translate from '@docusaurus/Translate';
import clsx from 'clsx';
import React from 'react';
import styles from './style.module.css';

type SupportItem = {
  id?: string;
  Image: React.ComponentType<React.ComponentProps<'svg'>>;
  link: string;
};

const supportList: SupportItem[] = [
  {
    Image: require('@site/static/img/vue.svg').default,
    link: 'https://vuejs.org'
  },
  {
    Image: require('@site/static/img/react.svg').default,
    link: 'https://react.dev/'
  },
  {
    Image: require('@site/static/img/svelte.svg').default,
    link: 'https://svelte.dev'
  },
  {
    id: 'next',
    Image: require('@site/static/img/next.svg').default,
    link: '/tutorial/next-step/ssr'
  },
  {
    id: 'nuxt',
    Image: require('@site/static/img/nuxt.svg').default,
    link: '/tutorial/next-step/ssr'
  },
  {
    Image: ({ className }) => (
      <img
        src={require('@site/static/img/uniapp.png').default}
        className={className}
      />
    ),
    link: 'https://uniapp.dcloud.net.cn/'
  },
  {
    Image: ({ className }) => (
      <img
        src={require('@site/static/img/taro.png').default}
        className={className}
      />
    ),
    link: 'https://taro.jd.com/'
  }
];

export default function Support(): JSX.Element {
  return (
    <div className={clsx('flex-col align-center', styles.wrapper)}>
      <div className={styles.icons}>
        {supportList.map(({ id, Image, link }) => (
          <a
            href={link}
            target="_blank"
            key={id || link}
            className={styles.iconWrapper}>
            <Image
              role="img"
              className={styles.icon}
            />
          </a>
        ))}
      </div>
      <h5 className="margin-top--md text--center">
        <Translate id="homepage.support.title">
          Gain the same experience on above platforms and seamless migration
        </Translate>
      </h5>
    </div>
  );
}
