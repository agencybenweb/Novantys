const Lines = () => {
  return (
    <>
      <div className="absolute left-0 top-0 -z-1 flex h-full w-full flex-col gap-3 opacity-50 xl:gap-7.5">
        <div className="relative flex h-full w-full xl:overflow-hidden">
          <div className="h-full w-1/5 border-r border-stroke dark:border-strokedark xl:w-1/4">
            <span className="line-y absolute bottom-0 left-0 top-0 my-auto hidden h-1/3 w-px animate-line1 bg-gradient-to-b from-transparent via-primary to-transparent xl:block"></span>
          </div>
          <div className="h-full w-1/5 border-r border-stroke dark:border-strokedark xl:w-1/4">
            <span className="line-y absolute bottom-0 left-0 top-0 my-auto hidden h-1/3 w-px animate-line2 bg-gradient-to-b from-transparent via-primary to-transparent xl:block"></span>
          </div>
          <div className="h-full w-1/5 border-r border-stroke dark:border-strokedark xl:w-1/4">
            <span className="line-y absolute bottom-0 left-0 top-0 my-auto hidden h-1/3 w-px animate-line3 bg-gradient-to-b from-transparent via-primary to-transparent xl:block"></span>
          </div>
          <div className="h-full w-1/5 border-r border-stroke dark:border-strokedark xl:w-1/4">
            <span className="line-y absolute bottom-0 left-0 top-0 my-auto hidden h-1/3 w-px animate-line1 bg-gradient-to-b from-transparent via-primary to-transparent xl:block"></span>
          </div>
          <div className="h-full w-1/5 xl:w-1/4">
            <span className="line-y absolute bottom-0 left-0 top-0 my-auto hidden h-1/3 w-px animate-line2 bg-gradient-to-b from-transparent via-primary to-transparent xl:block"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lines;

