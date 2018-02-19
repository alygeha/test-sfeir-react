import React from 'react';
import Card from './Card';

const Person = ({ data }) => (
  <Card>
    <img className="card-avatar" src="https://randomuser.me/portraits/women/81.jpg" alt="face of Mercedes" />
    <Card.Title subtitle={data.entity}>
      <a href="/person/idOfMercedes">{data.firstname} {data.lastname}</a>
    </Card.Title>
    <Card.Info icon="email">
      <a href={`mailto:${data.email}`}>{data.email}</a>
    </Card.Info>
    <Card.Info icon="phone">
      <a href={`tel:${data.phone}`}>{data.phone}</a>
    </Card.Info>
    <Card.Info icon="supervisor_account" desc="manager">
      <a href={`/person/${data.manager}`}>{data.manager}</a>  
    </Card.Info>
  </Card>

);

export default Person;