export const TokenAnimation = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="grid grid-cols-3 gap-1">
          <div className="animate-pulse flex gap-2">
            <div className="w-8 h-8 my-auto bg-neutral-900 rounded-full"></div>
            <div className="flex flex-col gap-2 h-full py-1">
              <p className="h-2 w-12 bg-neutral-900"></p>
              <p className="h-2 w-24 bg-neutral-900"></p>
            </div>
          </div>
          <div className="animate-pulse flex flex-col justify-center gap-2">
            <p className="h-2 w-16 mx-auto bg-neutral-900"></p>
            <p className="h-2 w-16 mx-auto bg-neutral-900"></p>
          </div>
          <div className="animate-pulse flex flex-col justify-center">
            <p className="h-2 mx-auto my-auto w-20 bg-neutral-900"></p>
          </div>
        </div>
      ))}
    </>
  );
};
