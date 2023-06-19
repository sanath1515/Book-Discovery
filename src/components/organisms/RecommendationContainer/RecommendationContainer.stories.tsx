import React from 'react';
import { RecommendationBookCardProps } from '../RecommendationBookCard/RecommendationBookCard';
import RecommendationContainer from './RecommendationContainer';

const bookData: RecommendationBookCardProps[] = [
    {
        "id":"1",
        "title": "Crystal chemistry",
        "authorName": "Joe Pearson",
        "image": "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/E3EEB4FA-4DF1-491D-8A51-DC1C1921FB60.png",
        
    },
    {
        "id":"2",
        "title": "Inorganic chemistry",
        "authorName": "Joe Pearson",
        "image": "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/03991C69-3988-432F-AD72-535D7FCFFC54.png",
    
    },
    {
        "id":"3",
        "title": "Bioorganic chemistry",
        "authorName": "Joe Pearson",
        "image": "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/19118712-5417-4364-9FC6-59FA289CE148.png",
    },
    {
        "id":"4",
        "title": "Basic Physics",
        "authorName": "Joe Pearson",
        "image": "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/BFB91888-5030-4E35-878F-68EC357D95CE.png",
    },
  ]

export default {
    title: 'organisms/RecommendationContainer',
    component: RecommendationContainer
};

const Template = (args) => <RecommendationContainer data={bookData} />;

export const Default = Template.bind({});
