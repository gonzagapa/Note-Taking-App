const elements = [1,2,3,4,5]

export  function CardsSkeleton() {

  return (
    <div className="grid grid-cols-3 gap-5">
        {elements.map((item) =>(
            <div key={item} className="skeleton h-32 w-32"></div>
        ))}
    </div>
  )
}
