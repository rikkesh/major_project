import React, { Component } from "react";
import "./App.css";
// import "./AppDark.css";

import AppControls from "./components/molecules/AppControls/AppControls";
import TopBar from "./components/organisms/TopBar/TopBar";
import AppDrawer from "./components/organisms/AppDrawer/AppDrawer";
import SortVisualizer from "./components/organisms/SortVisualizer/SortVisualizer";

import BubbleSort, {
  BubbleSortKey,
  BubbleSortDesc,
} from "./algorithms/BubbleSort";
import SelectionSort, {
  SelectionSortKey,
  SelectionSortDesc,
} from "./algorithms/SelectionSort";
import AppControlsSort from "./components/molecules/AppControlsSort/AppControlsSort";
import SortTopBar from "./components/organisms/SortTopBar/SortTopBar";

class App extends Component {
  state = {
    darkMode: false,
    array: [],
    arraySize: 10,
    trace: [],
    algorithm: null,
    appDrawerOpen: false,
  };

  ALGORITHM = {
    "Bubble Sort": BubbleSort,
    "Selection Sort": SelectionSort,
  };

  ALGORITHM_KEY = {
    "Bubble Sort": BubbleSortKey,
    "Selection Sort": SelectionSortKey,
  };

  ALGORITHM_DESC = {
    "Bubble Sort": BubbleSortDesc,
    "Selection Sort": SelectionSortDesc,
  };

  componentDidMount() {
    this.generateRandomArray();
  }

  generateRandomArray = () => {
    // Generate pseudo-random number between 1 and max
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    // Generate an array of length max
    const array = Array(this.state.arraySize)
      .fill(0)
      .map(() => getRandomInt(this.state.arraySize * 5));

    this.setState(
      {
        array,
        trace: [],
      },
      this.createTrace
    );
  };

  handleAlgorithmChange = (algorithm) => {
    this.setState({ algorithm }, this.generateRandomArray);
  };

  handleArraySizeChange = (size) => {
    size = Number(size);
    size = size > 100 ? 100 : size;
    size = size < 0 ? 0 : size;
    this.setState({ arraySize: size }, this.generateRandomArray);
  };

  createTrace = () => {
    const numbers = [...this.state.array];
    const sort = this.ALGORITHM[this.state.algorithm];
    if (sort) {
      const trace = sort(numbers);
      this.setState({ trace });
    }
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };

  toggleAppDrawer = () => {
    this.setState((prevState) => ({
      appDrawerOpen: !prevState.appDrawerOpen,
    }));
  };

  render() {
    let theme = `App`;
    if (this.state.darkMode) theme += ` App_dark`;
    if (this.state.appDrawerOpen) theme += ` App_modal_open`;

    const colorKey = this.ALGORITHM_KEY[this.state.algorithm];
    const desc = this.ALGORITHM_DESC[this.state.algorithm];

    const controls = (
      <AppControls
        onGenerateRandomArray={this.generateRandomArray}
        algorithm={this.state.algorithm}
        onAlgorithmChange={this.handleAlgorithmChange}
        arraySize={this.state.arraySize}
        onArraySizeChange={this.handleArraySizeChange}
        onToggleDarkMode={this.toggleDarkMode}
        darkMode={this.state.darkMode}
      />
    );

    const controlsSort = (
      <AppControlsSort
        onGenerateRandomArray={this.generateRandomArray}
        algorithm={this.state.algorithm}
        onAlgorithmChange={this.handleAlgorithmChange}
        arraySize={this.state.arraySize}
        onArraySizeChange={this.handleArraySizeChange}
        onToggleDarkMode={this.toggleDarkMode}
        darkMode={this.state.darkMode}
      />
    );

    return (
      <div className={theme}>
        <TopBar
          drawerOpen={this.state.appDrawerOpen}
          toggleDrawer={this.toggleAppDrawer}
        >
          {controls}
        </TopBar>

        <AppDrawer
          open={this.state.appDrawerOpen}
          closeDrawer={this.toggleAppDrawer}
        >
          {controls}
        </AppDrawer>

        <main className="App__Body">
          {" "}
          <SortVisualizer
            array={this.state.array}
            trace={this.state.trace}
            colorKey={colorKey}
            desc={desc}
          />
        </main>
        <SortTopBar
          drawerOpen={this.state.appDrawerOpen}
          toggleDrawer={this.toggleAppDrawer}
        >
          {controlsSort}
        </SortTopBar>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
