import FlexBox from '../../common/FlexBox'
import Img from '../../common/Img'
import Text from '../../common/Text'
import Button from '../../common/Button'

interface ProductItemProps {
  src: string
  alt: string
  mainText: string | number
  secondaryText: string | number
  buttonValue: string | React.ReactNode
  buttonEvent: () => void
}

const ProductItem = ({ src, alt, mainText, secondaryText, buttonValue, buttonEvent }: ProductItemProps) => {
  return (
    <FlexBox direction='column' alienItems='center'>
      <Img src={src} size='small' alt={alt} />
      <FlexBox>
        <FlexBox direction='column'>
          <Text fontSize='small'>{mainText}</Text>
          <Text fontSize='medium'>{secondaryText}</Text>
        </FlexBox>
        <Button onClick={buttonEvent} size='auto'>
          {buttonValue}
        </Button>
      </FlexBox>
    </FlexBox>
  )
}

export default ProductItem
