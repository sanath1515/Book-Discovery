import React from 'react';
import SearchResultCard from './SearchResultCard';

export default {
    title: 'molecules/SearchResultCard',
    component: SearchResultCard
};

const Default = (args) => <SearchResultCard title="Nature Chemistry"
authorName="J D Lee" field="Chemistry"
image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/7AE68B73-7512-4AED-BE9F-881F1BB4B173.png" id={''}/>;

export const Primary = Default.bind({});

