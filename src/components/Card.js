import React from 'react';
import './Card.css';

const Card = ({ title }) => (
<section class="Card card">
  <div class="card-content">
    <div class="card-title">
      {title}
    </div>
  </div>
</section>
);

export default Card;

