import React from "react";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from "next-i18next";

const Index: NextPage = props => {
  const { t } = useTranslation(["common"])
  
  return (
    <div>
      {t('hello')}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ["common"]),
  }
})

export default Index;
