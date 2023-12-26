import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <>
    {/* borderRadius={10} overflow={'hidden'} */}
      <Card width={"300px"}>
        <Skeleton height={"200px"} />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCardSkeleton;
