import {ComponentMeta, ComponentStory} from "@storybook/react";
import {XStack, YStack} from "tamagui";
import {LmSelect} from "../../../src";
import {fruitItemsFixtures} from "../../../fixtures/selectItems";

export default {
    title: 'ui/Forms/Select',
    component: LmSelect
} as ComponentMeta<typeof LmSelect>;

const options = fruitItemsFixtures

const Template: ComponentStory<typeof LmSelect> = (args) => <LmSelect {...args} />
export const Basic = Template.bind({})
Basic.args = {
    colorVariant: 'primary',
    options,
    label: 'Select Fruits',
    dropDownLabel: 'Fruits',
    width: 300,
    scrollButtonGradient: ['$red10', '$yellow10']
}

export const Inline = Template.bind({})
Inline.args = {
    colorVariant: 'primary',
    options,
    label: 'Select Fruits',
    placeholder: 'fruits...',
    labelInline: true,
    dropDownLabel: 'Fruits',
    width: 300,
    scrollButtonGradient: ['$red10', '$yellow10']
}

export const LightBlue = Template.bind({})
LightBlue.args = {
    themeName: 'light_blue',
    options,
    placeholder: "Doesn't show up"
}

export const Multiple = Template.bind({})
Multiple.args = {
    options,
    placeholder: "Multiple",
    multiple: true
}

export const Sizes = () => (
    <XStack space={'$4'}>
        <LmSelect options={options} colorVariant={'info'} size={'$1'}/>
        <LmSelect options={options} colorVariant={'info'} size={'$2'}/>
        <LmSelect options={options} colorVariant={'info'} size={'$4'}/>
        <LmSelect options={options} colorVariant={'info'} size={'$6'}/>
    </XStack>
)

export const Width = () => (
    <XStack space={'$4'}>
        <LmSelect options={options} colorVariant={'info'} width={150}/>
        <LmSelect options={options} colorVariant={'info'}/> {/* default 200 */}
        <LmSelect options={options} colorVariant={'info'} width={250}/>
        <LmSelect options={options} colorVariant={'info'} width={300}/>
    </XStack>
)

export const Colors = () => (
    <YStack space={'$4'}>
        <XStack space={'$4'}>
            <LmSelect options={options} colorVariant={'primary'}/>
            <LmSelect options={options} colorVariant={'secondary'}/>
            <LmSelect options={options} colorVariant={'success'}/>
        </XStack>
        <XStack space={'$4'}>
            <LmSelect options={options} colorVariant={'info'}/>
            <LmSelect options={options} colorVariant={'warning'}/>
            <LmSelect options={options} colorVariant={'error'}/>
            <LmSelect options={options} themeName={'dark_gray_alt2'}/>
        </XStack>
    </YStack>
)



