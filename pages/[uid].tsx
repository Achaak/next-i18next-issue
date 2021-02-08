import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from "next-i18next";

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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ["common"]),
  }
})

export default Index;
