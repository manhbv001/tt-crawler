/* eslint-disable react/jsx-no-target-blank */
import { useIntl } from 'react-intl'
import { AsideMenuItem } from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/user'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({ id: 'MENU.USERS' })}
        fontIcon='bi-app-indicator'
      />

      <AsideMenuItem
        to='/tiktok-profile'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({ id: 'MENU.TIKOK_PROFILE' })}
        fontIcon='bi-app-indicator'
      />
    </>
  )
}
