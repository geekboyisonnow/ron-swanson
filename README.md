<div className="App">
        <header className="App-header">
          <h1>
            Swans
            <img src={meat} className="App-logo" alt="logo" />
            nisms
          </h1>
        </header>
        <div id="border">
          <img
            src={this.state.image}
            className="ronnie"
            alt="Ron-Swanson-Image"
          />
          <p id="quote">{this.state.quotes}</p>
          <button id="get-quote" value="1" onClick={this._click}>
            Vote for Swanson!
          </button>
        </div>
        <footer />
      </div>
