import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from "next-i18next";
import path from "path";

const Index: NextPage = props => {
  const router = useRouter()
  const routeUid = router.query.uid

  const { t } = useTranslation(["common"])
  
  return (
    <div>
      {t('test')} {routeUid}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  path.resolve('./public/locales')
  return {
    props: {
      ...await serverSideTranslations(locale, ["common"]),
    }
  }
}

export default Index;
