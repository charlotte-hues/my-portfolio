import React, { lazy, useState, useEffect } from "react";

const importShape = shapeName =>
  lazy(() =>
    import(`./Shapes/${shapeName}`).catch(() => import(`./Shapes/NullShape`))
  );

const Patterns = ({ patternData }) => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    async function loadShapes() {
      const shapePromises = patternData.map(async shape => {
        const View = await importShape(shape.component);
        return <View key={shape.uid} {...shape} />;
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
