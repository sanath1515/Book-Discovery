import TopicYouFollowSub, { TopicsYouFollowSubProps } from './TopicYouFollowSubject'
import { Story, Meta } from "@storybook/react";
export default{
    title:'molecules/TopicYouFollowSub',
    component:TopicYouFollowSub
}as Meta;

const Template:Story<TopicsYouFollowSubProps>=(args)=> <TopicYouFollowSub {...args}/>;

export const PrimaryA = Template.bind({});
PrimaryA.args={
    imgSrc:"https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/50247E5B-3788-492D-956F-63172A8FDBF8.png",
    subjectName:'Telugu',
}
PrimaryA.args={
    imgSrc:"https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/4BA2C98D-1B0A-4984-A36F-3994BACDB944.png",
    subjectName:'Hindi',
}
PrimaryA.args={
    imgSrc:"https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/80BD6795-E0BE-4765-9C23-F737D4F6AD7B.png",
    subjectName:'English',
}
PrimaryA.args={
    imgSrc:"https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/40955D7D-20CD-4EF3-A752-728C3D5810E6.png",
    subjectName:'Physics',
}
PrimaryA.args={
    imgSrc:"https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/AF4114D0-FABB-4712-804C-5BFCFF242AAB.png",
    subjectName:'Chemistry',
}
PrimaryA.args={
    imgSrc:"https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/14055696-F8E6-4CF2-B2C1-9F881E3A0CF4.png",
    subjectName:'Social',
}