export function formatBOMtime(bomTime) {
  return (
    bomTime.slice(0, 4) +
    '-' +
    bomTime.slice(4, 6) +
    '-' +
    bomTime.slice(6, 8) +
    'T' +
    bomTime.slice(8, 10) +
    ':' +
    bomTime.slice(10, 12) +
    ':' +
    bomTime.slice(12, 14)
  );
}

// Example: formatBOMtime('20210709200000') => "2021-07-09T20:00:00"

export default formatBOMtime;
