const Loading = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-6">
      <div className="col-span-1 w-full flex flex-col h-56 bg-gray-800 border-white border">
        <div className="w-full h-48 animate-pulse bg-gray-500" />

        <div className="h-6 animate-pulse bg-gray-500 my-auto" />
      </div>
    </div>
  );
};

export default Loading;
