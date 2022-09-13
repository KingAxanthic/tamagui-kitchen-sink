import {Card, CardProps, ColorTokens, getTokens, Text, XStack} from "tamagui";
import {AlertCircle, AlertTriangle, CheckCircle, Info} from '@tamagui/feather-icons'

type Severity = 'default' | 'error' | 'info' | 'warning' | 'success';
export type LmAlertProps = CardProps & {
    severity?: Severity
    text?: string
    outlined?: boolean
    hideIcon?: boolean
}

const severityColor: { [k in Severity]: ColorTokens } = {
    default: '$gray3Dark',
    error: '$red10Dark',
    info: '$blue10Dark',
    warning: '$orange10Dark',
    success: '$green10Dark'
}

type AlertIconProps = {
    severity?: Severity
    outlined?: boolean
}

function AlertIcon({severity = 'default', outlined}: AlertIconProps) {
    const {color} = getTokens()
    const props: { color?: string } = {}
    if (outlined) {
        props.color = color[severityColor[severity]]?.val as string
    }
    return {
        default: <Info {...props} />,
        error: <AlertCircle {...props}/>,
        info: <Info {...props}/>,
        warning: <AlertTriangle {...props}/>,
        success: <CheckCircle {...props}/>
    }[severity]
}


export function LmAlert({severity = 'default', text, hideIcon, outlined, children, ...rest}: LmAlertProps) {
    return (
        <Card
            bordered={outlined}
            {...(outlined ? {
                // border: `1px solid ${severityColor[severity]}`,
                borderColor: severityColor[severity],
                color: severityColor[severity]
            } : {
                backgroundColor: severityColor[severity]
            })}
            padding={rest.padding || '$4'}>
            <XStack space alignItems={'center'}>
                <AlertIcon severity={severity} outlined={outlined}/>
                {text && (
                    <Text fontWeight={outlined ? 'bold' : undefined}
                          color={outlined ? severityColor[severity] : undefined}>{text}</Text>
                )}
                {children}
            </XStack>
        </Card>
    )
}