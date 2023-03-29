import { useEffect, useState } from 'react'

import * as S from './styles'

import { FlexBox, ProductItem, FlexItem } from '../../components/common'
import { ReactComponent as ShoppingBack } from '../../../assets/shoppingCart.svg'
import { productApi } from '../../mocks/api'

const ProductList = () => {
  const [productList, setProductList] = useState<ProductItem[]>([])

  useEffect(() => {
    productApi().then((data) => setProductList(data))
  }, [])

  return (
    <S.sectionContainer>
      <FlexBox wrap='wrap' alienItems='center'>
        {productList.map((data) => (
          <FlexItem key={data.id} flexBasis={4}>
            <ProductItem
              src={data.imageUrl}
              alt={data.name}
              mainText={data.name}
              secondaryText={`${data.price}원`}
              buttonValue={<ShoppingBack />}
              // eslint-disable-next-line no-console
              buttonEvent={() => console.log(`ID:${data.id} 장바구니 저장 `)}
            />
          </FlexItem>
        ))}
      </FlexBox>
    </S.sectionContainer>
  )
}

export default ProductList
