// Initialize a new trace with the starting state of the array
export const newTrace = (array) => {
  return [
    {
      array: [...array],
      groupA: [],
      groupB: [],
      groupC: [],
      groupD: [],
      sortedIndices: [],
      swapCount: 0, // Initialize swap count
    },
  ];
};

// Add a new state to the trace with proper handling of keys
export const addToTrace = (
  trace,
  array,
  sortedIndices = [],
  groupA = [],
  groupB = [],
  groupC = [],
  groupD = [],
  comparing = [],
  swapping = [],
  swaps = 0
) => {
  // Use Array.isArray() to ensure proper array structure or keep original behavior if necessary
  const formattedTrace = {
    array: [...array],
    groupA: Array.isArray(groupA) ? [...groupA] : Array.from(groupA || []),
    groupB: Array.isArray(groupB) ? [...groupB] : Array.from(groupB || []),
    groupC: Array.isArray(groupC) ? [...groupC] : Array.from(groupC || []),
    groupD: Array.isArray(groupD) ? [...groupD] : Array.from(groupD || []),
    sortedIndices: Array.isArray(sortedIndices) ? [...sortedIndices] : [],
    comparing: Array.isArray(comparing) ? [...comparing] : [],
    swapping: Array.isArray(swapping) ? [...swapping] : [],
    swapCount: swaps,
  };

  trace.push(formattedTrace);
};

// Get the last sorted indices from the trace safely
export const lastSorted = (trace) => {
  return trace[trace.length - 1]?.sortedIndices || [];
};

// Swap two elements in an array
export const swap = (array, i, j) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

// Create a range of numbers from start to end (exclusive)
export const createRange = (start, end) => {
  return [...Array(end - start).keys()].map((elem) => elem + start);
};

// Create a key object with the provided groups, ensuring proper array handling
export const createKey = (groupA, groupB, groupC, groupD) => {
  return {
    groupA: Array.isArray(groupA) ? groupA : Array.from(groupA || []),
    groupB: Array.isArray(groupB) ? groupB : Array.from(groupB || []),
    groupC: Array.isArray(groupC) ? groupC : Array.from(groupC || []),
    groupD: Array.isArray(groupD) ? groupD : Array.from(groupD || []),
  };
};
