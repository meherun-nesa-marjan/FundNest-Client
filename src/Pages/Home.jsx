import React, { useState } from 'react';
import Bannar from '../Components/Bannar';
import RunningCampaign from '../Components/RunningCampaign';
import Extra from '../Components/Extra';
import ExtraSection from '../Components/ExtraSection';
import BlogSection from '../Components/BlogSection';
import NewsletterSection from '../Components/NewsletterSection';

const Home = () => {
    return (
        <div className="">
             <Bannar />
             <RunningCampaign /> 
             <Extra />
             <ExtraSection />
             <BlogSection />
             <NewsletterSection />
          </div>
      );
    
};

export default Home;