import React, { lazy, useState, useEffect } from "react";

const importShape = shapeName =>
  lazy(() =>
    import(`./Shapes/${shapeName}`).catch(() => import(`./Shapes/NullShape`))
  );

const Patterns = ({ patternData, animatedValue }) => {
  const [shapes, setShapes] = useState([]);

  const { value, range } = animatedValue;

  useEffect(() => console.log(value), [value]);

  useEffect(() => {
    async function loadShapes() {
      const shapePromises = patternData.map(async shape => {
        const Shape = await importShape(shape.component);
        return (
          <Shape key={shape.uid} {...shape} animatedValue={animatedValue} />
        );
      });
      Promise.all(shapePromises).then(setShapes);
    }

    loadShapes();
  }, [patternData, animatedValue]);

  return (
    <>
      <React.Suspense fallback=" ">{shapes}</React.Suspense>
    </>
  );
};

export default Patterns;
