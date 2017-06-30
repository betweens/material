import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
const versionArray =[
  'v0.18.5',
  'v0.18.4', 
  'v0.18.3', 
  'v0.18.2', 
  'v0.18.1', 
  'v0.17.2', 
  'v0.17.1', 
  'v0.17.0', 
  'v0.16.7', 
  'v0.16.6', 
  'v0.16.5', 
  'v0.16.4', 
  'v0.16.3', 
  'v0.16.2', 
  'v0.16.1', 
  'v0.16.0', 
  'v0.15.4', 
  'v0.15.3', 
  'v0.15.2', 
  'v0.15.1', 
  'v0.15.0', 
  'v0.14.4', 
  'v0.14.3', 
  'v0.14.2', 
  'v0.14.1', 
  'v0.14.0',
  'v0.13.4', 
  'v0.13.3', 
  'v0.13.2', 
  'v0.13.1', 
  'v0.13.0',  
  'v0.12.4', 
  'v0.12.3', 
  'v0.12.2', 
  'v0.12.1', 
  'v0.12.0',
  'v0.11.1', 
  'v0.11.0',  
  'v0.10.4', 
  'v0.10.3', 
  'v0.10.2', 
  'v0.10.1',  
  'v0.10.0', 
  'v0.9.2', 
  'v0.9.1',
  'v0.9.0',
  'v0.8.0',
  'v0.7.5',
  'v0.7.2',
  'v0.7.1',
  'v0.5.0',
  'v0.7.3',
  'v0.7.0',
  'v0.6.1',
  'v0.6.0',
  'v0.4.1',
  'v0.4.0',
  'v0.3.3',
  'v0.3.2',
  'v0.3.1',
  'v0.3.0']

const Version = versionArray.map((value, index) => {
  return <MenuItem key={index} value={index} primaryText={value} />
});

export default Version;








