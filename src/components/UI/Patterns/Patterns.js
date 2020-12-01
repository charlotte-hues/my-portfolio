import React, { lazy, useState, useEffect } from "react";

const importShape = shapeName =>
  lazy(() =>
    import(`./Shapes/${shapeName}`).catch(() => import(`./Shapes/NullShape`))
  );

const Patterns = ({ patternData, movement }) => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    async function loadShapes() {
      const shapePromises = patternData.map(async shape => {
        const Shape = await importShape(shape.component);
        return <Shape key={shape.uid} {...shape} />;
      });
      Promise.all(shapePromises).then(setShapes);
    }

    loadShapes();
  }, [patternData]);

  return (
    <>
      <React.Suspense fallback=" ">{shapes}</React.Suspense>
    </>
  );
};

export default Patterns;
