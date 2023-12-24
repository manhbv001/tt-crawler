import { FC } from 'react'
import { PageTitle } from '../../../_metronic/layout/core'
import { ProfilePage } from './ProfilePage'

const ProfilePageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>TikTok Profile</PageTitle>
      <ProfilePage />
    </>
  )
}

export default ProfilePageWrapper
