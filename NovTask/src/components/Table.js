import React from 'react';
import './Table.scss';

const WildlifeConservationTable = () => {
  return (
    <section id='data'>
    <div className="container">
      <h1>Table Data</h1>
      <table className="responsive-table">
        <caption>Wildlife Conservation Data</caption>
        <thead>
          <tr>
            <th scope="col">Species</th>
            <th scope="col">Habitat</th>
            <th scope="col">Population</th>
            <th scope="col">Conservation Status</th>
            <th scope="col">Conservation Efforts</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td colSpan="5">Data of Endangered Species Sources: Wikipedia . Data is current as of November 12, 2023.</td>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <th scope="row">Amur leopard</th>
            <td data-title="Habitat">Temperate forest</td>
            <td data-title="Population">100</td>
            <td data-title="Conservation Status">Critically Endangered</td>
            <td data-title="Conservation Efforts">Reforestation, anti-poaching patrols, captive breeding</td>
          </tr>
          <tr>
            <th scope="row">Black rhinoceros</th>
            <td data-title="Habitat">Savanna</td>
            <td data-title="Population">5500</td>
            <td data-title="Conservation Status">Critically Endangered</td>
            <td data-title="Conservation Efforts">Anti-poaching patrols, community-based conservation initiatives</td>
          </tr>
          <tr>
            <th scope="row">Giant panda</th>
            <td data-title="Habitat">Temperate forest</td>
            <td data-title="Population">1800</td>
            <td data-title="Conservation Status">Vulnerable</td>
            <td data-title="Conservation Efforts">Bamboo plantation restoration, captive breeding</td>
          </tr>
          <tr>
            <th scope="row">Mountain gorilla</th>
            <td data-title="Habitat">Montane forest</td>
            <td data-title="Population">1000</td>
            <td data-title="Conservation Status">Critically Endangered</td>
            <td data-title="Conservation Efforts">Anti-poaching patrols, community-based conservation initiatives</td>
          </tr>
          <tr>
            <th scope="row">Orangutan</th>
            <td data-title="Habitat">Tropical rainforest</td>
            <td data-title="Population">130000</td>
            <td data-title="Conservation Status">Endangered</td>
            <td data-title="Conservation Efforts">Reforestation, anti-poaching patrols, community-based conservation initiatives</td>
          </tr>
          <tr>
            <th scope="row">Sumatran elephant</th>
            <td data-title="Habitat">Tropical rainforest</td>
            <td data-title="Population">1500</td>
            <td data-title="Conservation Status">Critically Endangered</td>
            <td data-title="Conservation Efforts">Anti-poaching patrols, community-based conservation initiatives</td>
          </tr>
          <tr>
            <th scope="row">Vaquita</th>
            <td data-title="Habitat">Marine</td>
            <td data-title="Population">10</td>
            <td data-title="Conservation Status">Critically Endangered</td>
            <td data-title="Conservation Efforts">Removal of gillnets, captive breeding</td>
          </tr>
          <tr>
            <th scope="row">Hawksbill turtle</th>
            <td data-title="Habitat">Marine</td>
            <td data-title="Population">80000</td>
            <td data-title="Conservation Status">Critically Endangered</td>
            <td data-title="Conservation Efforts">Protection of nesting sites, anti-poaching patrols, reduction of plastic pollution</td>
          </tr>
          <tr>
            <th scope="row">Green sea turtle</th>
            <td data-title="Habitat">Marine</td>
            <td data-title="Population">80000</td>
            <td data-title="Conservation Status">Endangered</td>
            <td data-title="Conservation Efforts">Protection of nesting sites, reduction of plastic pollution</td>
          </tr>
          <tr>
            <th scope="row">Bengal tiger</th>
            <td data-title="Habitat">Tropical rainforest</td>
            <td data-title="Population">4500</td>
            <td data-title="Conservation Status">Endangered</td>
            <td data-title="Conservation Efforts">Anti-poaching patrols, community-based conservation initiatives</td>
          </tr>
          <tr>
            <th scope="row">African elephant</th>
            <td data-title="Habitat">Savanna</td>
            <td data-title="Population">415000</td>
            <td data-title="Conservation Status">Vulnerable</td>
            <td data-title="Conservation Efforts">Anti-poaching patrols, community-based conservation initiatives</td>
          </tr>
        </tbody>
      </table>
    </div>
    </section>
  );
};

export default WildlifeConservationTable;
