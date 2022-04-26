export function filterAuth(filter) {
  const [minTempo, maxTempo] = filter.Tempo;
  const [minDanceability, maxDanceability] = filter.Danceability;
  const [minYear, maxYear] = filter.Year;
  const [minEnergy, maxEnergy] = filter.Energy;
  const TempoMax = 126.0;
  const DnceMax = 1.0;
  const YearMax = 2020;
  const EneryMax = 1.0;
  const TempoMin = 110.0;
  const DnceMin = 0.62;
  const YearMin = 2014;
  const EneryMin = 0.7;
  if (
    !minTempo ||
    !maxTempo ||
    !minDanceability ||
    !maxDanceability ||
    !minYear ||
    !maxYear ||
    !minEnergy ||
    !maxEnergy
  ) {
    return false;
  }
  if (minTempo < TempoMin || maxTempo > TempoMax || minTempo > maxTempo) {
    return false;
  }
  if (
    minDanceability < DnceMin ||
    maxDanceability > DnceMax ||
    minDanceability > maxDanceability
  ) {
    return false;
  }
  if (minYear < YearMin || maxYear > YearMax || minYear > maxYear) {
    return false;
  }
  if (minEnergy < EneryMin || maxEnergy > EneryMax || minEnergy > maxEnergy) {
    return false;
  }
  return true;
}

function titleMerge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    if (left[0].title.toLowerCase() < right[0].title.toLowerCase()) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}
export function titleMergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const boundary = Math.ceil(arr.length / 2);
  const left = arr.slice(0, boundary);
  const right = arr.slice(boundary);
  return titleMerge(titleMergeSort(left), titleMergeSort(right));
}

function yearMerge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    if (left[0].year < right[0].year) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}
export function yearMergeSort(arr) {
  if (arr.length <= 1) return arr;
  const boundary = Math.ceil(arr.length / 2);
  const left = arr.slice(0, boundary);
  const right = arr.slice(boundary);

  return yearMerge(yearMergeSort(left), yearMergeSort(right));
}
export function randomize(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

export function deepCopy(arr) {
  let result = [...arr].map((child) => ({ ...child }));
  return result;
}

export function nAuth(n) {
  if (n <= 0) {
    return false;
  }
  return true;
}

export function returnNarr(n, arr) {
  if (len(arr) < n) {
    return arr;
  } else {
    return arr.slice(0, n);
  }
}

export function orderbyAuth(orderby) {
  const orders = ["title", "-title", "year", "-year", "random"];
  if (!orders.includes(orderby)) {
    return false;
  }
  return true;
}

export function getRequiredComponentMusics(arr) {
  const result = arr.map((music) => {
    const { id, title, artists, artist_ids, year } = music;
    return {
      id,
      title,
      artists,
      artist_ids,
      year,
    };
  });
  return result;
}
