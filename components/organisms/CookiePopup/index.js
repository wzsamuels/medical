import BannerPopup from '../../molecules/BannerPopup';
import Flex from '../../atoms/Flex';
import Button from '../../atoms/Button';
import GroupContainer from '../../atoms/GroupContainer';

const CookiePopup = ({children, onAccept = f => f, onDecline = f => f, props}) => {
  return (
    <BannerPopup time='1s' style={{width:'800px'}} bp='800px' {...props}>
      <Flex style={{justifyContent:'space-between'}}>
        <div style={{margin:'1em 1em 0 1em'}}>
          {children}
        </div>
        <GroupContainer>
          <Button onClick={onAccept}>Accept</Button>
          <Button onClick={onDecline}>Decline</Button>
        </GroupContainer>
      </Flex>
    </BannerPopup>
  )
}

export default CookiePopup