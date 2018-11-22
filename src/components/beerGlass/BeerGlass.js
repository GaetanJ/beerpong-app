import React from 'react'

import './BeerGlass.css'


class BeerGlass extends React.Component {
  render() {
    return (
        <div class="container">
          <div class="borderbox">
              <div class="glass">
                  <div class="inner">
                      <div class="bubble"></div>
                      <div class="bubble"></div>
                      <div class="bubble"></div>
                      <div class="bubble"></div>
                      <div class="bubble"></div>
                      <div class="bubble"></div>
                      <div class="bubble"></div>
                      <div class="bubble"></div>
                      <div class="bubble"></div>
                      <div class="bubble"></div>
                      <div class="bubble"></div>
                  </div>
              </div>
          </div>
        </div>
    )
  }
}


export default BeerGlass;