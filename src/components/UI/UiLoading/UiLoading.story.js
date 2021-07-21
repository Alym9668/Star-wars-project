import UiLoading from "./UiLoading";

export default {
    title: 'Ui-Kit/UiLoading',
    component: UiLoading
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <UiLoading {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {

};