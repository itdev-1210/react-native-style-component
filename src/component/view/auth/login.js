import React from 'react';

import { ContainerView, TextView, Logo, LogoView, WrapperView, PhoneNumber,SocialLogin, TextWrapper, CustomButton, ImageView } from './styles';

const login = () => {
  return (
    <ContainerView 
      backgroundColor={'#FFF'}
      flexDirection={'column'}
      leftBottomRadius={0} 
      rightBottomRadius={0} 
      flex={1}
      justifyContent={'center'}
      alignItems={'stretch'}
      paddingHorizontal={0}>
      <ContainerView 
        backgroundColor={'#6207ef'} 
        leftBottomRadius={'12px'}
        flexDirection={'column'}
        rightBottomRadius={'12px'} 
        flex={5} 
        justifyContent={'space-between'}
        alignItems={'stretch'}
        paddingHorizontal={'20px'}>
          <WrapperView alignItems={'flex-start'}>
            <LogoView>
              <Logo source={require('../../../image/me.png')}/>
              <TextView fontSize={'32px'} color={'#FFF'}>Pickmeup</TextView>
            </LogoView>
            <TextView fontSize={'24px'} color={'#FFF'}>Hey there!</TextView>
            <TextView fontSize={'20px'} color={'#FFF'}>Type in your phone number to get started</TextView>
            <PhoneNumber/>
          </WrapperView>
          <WrapperView alignItems={'center'}>
            <TextView fontSize={'16px'} color={'#FFF'}>or you can sign in with</TextView>
          </WrapperView>
      </ContainerView>


      <ContainerView 
        backgroundColor={'#FFF'} 
        leftBottomRadius={0} 
        rightBottomRadius={0} flex={1}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'row'}
        paddingHorizontal={0}>
          <CustomButton>
            <SocialLogin borderColor={'#6207ef'}>
              <ImageView source={require('../../../image/facebook.png')}/>
              <TextWrapper borderRadius={0} backgroundColor={'#FFF'}>
                <TextView fontSize={'14px'} color={'#000'}>Facebook</TextView>
              </TextWrapper>
            </SocialLogin>
          </CustomButton>
          <CustomButton>
            <SocialLogin borderColor={'#dddddd'}>
              <ImageView source={require('../../../image/google.png')}/>
              <TextWrapper borderRadius={'6px'} backgroundColor={'#6207ef'}>
                <TextView fontSize={'14px'} color={'#FFF'}>Google</TextView>
              </TextWrapper>
            </SocialLogin>
          </CustomButton>
      </ContainerView>
    </ContainerView>
  );
};

export default login;
