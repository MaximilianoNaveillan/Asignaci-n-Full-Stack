export default function Table({ cols, rows }) {
  return (
    <div>
      {rows.length > 0 && (
        <table cellSpacing="0">
          <thead>
            <tr>
              {cols.slice(2).map((headerItem, index) => (
                <th key={index}>{headerItem.toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.values(rows).map((obj, index) => (
              <tr key={index}>
                {Object.values(obj)
                  .slice(2)
                  .map((value, i) => (
                    <td key={i}>.{value}</td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
