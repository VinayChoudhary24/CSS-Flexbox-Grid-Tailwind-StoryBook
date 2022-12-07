import { Profile } from './Profile';

export default {
  title: 'Component/Profile',
  component: Profile,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen', //This Removes the Initial Padding by StoryBook
  },
};

const Template = (args) => <Profile {...args} />;

export const StandardProfile = Template.bind({});
StandardProfile.args = {
  user: {
    name: 'Jane Doe',
  },
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
