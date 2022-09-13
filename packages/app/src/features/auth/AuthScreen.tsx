import {ScrollView} from "react-native";
import {LmAlert, LmButton, LmFormRfhProvider, LmInputRhf, LmSubmitButtonRhf, XGroup} from '@my/ui'
import {XStack, YStack} from "tamagui";
import {useSignInEmailPassword, useSignUpEmailPassword} from '@nhost/react'
import {useState} from "react";
import {AnonymousGuard} from "app/src/components/guards/AnonymousGuard";

export function AuthScreen() {
    const [loginState, setLoginState] = useState<'login' | 'register'>('login')
    const {signInEmailPassword, isLoading, error, needsEmailVerification, user} = useSignInEmailPassword()
    const {
        signUpEmailPassword,
        isLoading: isLoading2,
        error: error2,
        user: user2,
        needsEmailVerification: needsEmailVerification2
    } = useSignUpEmailPassword()
    const err = error || error2
    const usr = user || user2
    console.log(user)
    return (
        <AnonymousGuard>

            <LmFormRfhProvider>
                <ScrollView>
                    <XStack justifyContent={'center'}>
                        <YStack space>
                            <h1>Welcome</h1>
                            {err && (
                                <LmAlert severity={'error'} text={err.message}/>
                            )}
                            <XGroup>
                                <LmButton
                                    onPress={() => setLoginState('login')}
                                    colorVariant={loginState === 'login' ? 'primary' : undefined}>Login</LmButton>
                                <LmButton
                                    onPress={() => setLoginState('register')}
                                    colorVariant={loginState === 'register' ? 'primary' : undefined}>Register</LmButton>
                            </XGroup>
                            <LmInputRhf name={'email'} label={'Email'} labelInline required/>
                            <LmInputRhf name={'password'} label={'Password'} labelInline required/>
                            <LmSubmitButtonRhf
                                loading={isLoading || isLoading2}
                                onSubmit={async (data) => {
                                    if (loginState === 'login') {
                                        await signInEmailPassword(data.email, data.password)
                                    } else if (loginState === 'register') {
                                        await signUpEmailPassword(data.email, data.password)
                                    }
                                }}>Login</LmSubmitButtonRhf>
                        </YStack>
                    </XStack>
                </ScrollView>
            </LmFormRfhProvider>
        </AnonymousGuard>
    )
}