import React, { useState } from 'react';
import Bannar from '../Components/Bannar';
import RunningCampaign from '../Components/RunningCampaign';
import Extra from '../Components/Extra';
import ExtraSection from '../Components/ExtraSection';

const Home = () => {
    return (
        <div className="">
             <Bannar />
             <RunningCampaign /> 
             <Extra />
             <ExtraSection />
          </div>
      );
    
};

export default Home;