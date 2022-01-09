

const LineDecorations = ({ dataPoints }) => {

  const arr = [];

  for (const item of dataPoints) {
    arr.push((
      <>
        <text
          x={item.x}
          y={4}
          textAnchor="middle"
          className="text-sm fill-gray-400"
        >{'|'}</text>

        <text
          x={item.x}
          y={24}
          textAnchor="middle"
          className="text-sm fill-gray-400"
        >{item.salary}</text>
      </>
    ))
  }

  return arr;
}

export default LineDecorations;
