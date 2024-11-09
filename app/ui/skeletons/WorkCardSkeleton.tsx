export function WorkCardSkeleton() {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <div className="relative space-y-8">
        <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-200"></div>
        <div className="relative pl-8">
          <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-gray-200"></div>
          <div className="p-6 h-[300px] bg-gray-200 rounded"></div>
        </div>
        <div className="relative pl-8">
          <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-gray-200"></div>
          <div className="p-6 h-[300px] bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
