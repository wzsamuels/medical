import Loader from '../../atoms/Loader';
import Flex from '../../atoms/Flex';

function FlexData({data, loading, Comp}) {

  if(loading) {
    return <Loader style={{margin: "0 auto"}} />
  }

  return (
    <Flex className='center'>
      {data.map((item, index) => <Comp key={index} item={item}/>)}
    </Flex>
  )
}

export default FlexData