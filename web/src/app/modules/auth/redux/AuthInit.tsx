import { FC, useEffect, useRef, useState } from 'react'
import { ConnectedProps, connect, shallowEqual, useDispatch, useSelector } from 'react-redux'
import { LayoutSplashScreen } from '../../../../_metronic/layout/core'
import { RootState } from '../../../../setup'
import { getUserByToken } from './AuthCRUD'
import * as auth from './AuthRedux'

const mapState = (state: RootState) => ({ auth: state.auth })
const connector = connect(mapState, auth.actions)
type PropsFromRedux = ConnectedProps<typeof connector>

const AuthInit: FC<PropsFromRedux> = (props) => {
  const didRequest = useRef(false)
  const dispatch = useDispatch()
  const [showSplashScreen, setShowSplashScreen] = useState(true)
  const accessToken = useSelector<RootState>(({ auth }) => auth.accessToken, shallowEqual)

  // We should request user by authToken before rendering the application
  useEffect(() => {
    const requestUser = async () => {
      try {
        if (!didRequest.current) {
          const { data } = await getUserByToken()
          dispatch(props.fulfillUser(data))
        }
      } catch (error) {
        console.error(error)
        if (!didRequest.current) {
          dispatch(props.logout())
        }
      } finally {
        setShowSplashScreen(false)
      }

      return () => (didRequest.current = true)
    }

    if (accessToken) {
      requestUser()
    } else {
      dispatch(props.logout())
      setShowSplashScreen(false)
    }
    // eslint-disable-next-line
  }, [])

  return showSplashScreen ? <LayoutSplashScreen /> : <>{props.children}</>
}

export default connector(AuthInit)
