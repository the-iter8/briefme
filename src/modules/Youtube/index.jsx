import React from "react";
import Avatar from "@mui/material/Avatar";
import Text from "../../components/Text";
import styles from "./Youtube.module.css";
import LargeCard from "../../components/Cards/Large";
import { useYoutube } from "../../api/Endpoints";

export default function Youtube(props) {
  const { isEdit, localUserPref, setLocalUserPref } = props;
  const { data, error, isLoading } = useYoutube();

  const SectionOne = ({}) => {
    return (
      <div className={styles.sectionOne}>
        <div className='align-center flex-column'>
          <Avatar alt=' ' src={data?.items[0].snippet.thumbnails.default.url} sx={{ width: 54, height: 54 }} />
          <Text size='xs' weight='semi-bold'>
            {data?.items[0].snippet.customUrl}
          </Text>
        </div>
        <div className={styles.content}>
          <div className='text-center'>
            <Text weight='semi-bold'>Subcribers Count</Text>
            <Text>{data?.items[0].statistics.subscriberCount || "--"}</Text>
          </div>
          <div className='text-center'>
            <Text weight='semi-bold'>Total View Count</Text>
            <Text>{data?.items[0].statistics.viewCount || "--"}</Text>
          </div>
        </div>
      </div>
    );
  };

  return (
    <LargeCard
      keyID='YT'
      isEdit={isEdit}
      isLoading={isLoading || error}
      title='Youtube Dashboard'
      source='Youtube Data API'
      localUserPref={localUserPref}
      setLocalUserPref={setLocalUserPref}
    >
      <SectionOne />
    </LargeCard>
  );
}
