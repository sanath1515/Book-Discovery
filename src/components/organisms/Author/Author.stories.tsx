import React from 'react';
import Author from './Author';

export default {
    title: 'molecules/Author',
    component: Author
};

type Image={
    image:string
}
const tempImage:Image={
    image: "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/03991C69-3988-432F-AD72-535D7FCFFC54.png"
 }
 const batchBooks:Image[] = [tempImage,tempImage,tempImage];


const Template = (args) => <Author booksSrc={batchBooks} authorName={'J D Lee'} authorImage={''}/>

export const Default = Template.bind({});
