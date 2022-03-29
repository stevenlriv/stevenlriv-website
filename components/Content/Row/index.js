const ContentRow = (props) => {
  return (
    <div className="max-w-5xl mx-auto flex flex-wrap mb-16">
      {props.one && (
        <div className="w-full md:w-1/2 lg:w-1/3 px-6 md:px-10 mb-16">
          <a className="block" href={props.one.url} target="_blank" rel="noreferrer">
            <div className="max-w-xs mx-auto">
              <div className="relative mb-12 h-64">
                <div className="absolute left-0 bottom-0 -ml-6 -mb-6 w-full h-64 bg-black" />
                <img
                  className="relative w-full h-full"
                  src={props.one.imageURL}
                  alt=""
                />
              </div>
              <h2 className="text-4xl mb-4 font-heading">
                {props.one.title}
              </h2>
              <p>{props.one.description}</p>

              <div className="mt-4 mb-4 text-blue-700">
                <span>Click here to view</span>
              </div>
            </div>
          </a>
        </div>
      )}

      {props.two && (
        <div className="w-full md:w-1/2 lg:w-1/3 px-6 md:px-10 mb-16">
          <a className="block" href={props.two.url}  target="_blank" rel="noreferrer">
            <div className="max-w-xs mx-auto">
              <div className="relative mb-12 h-64">
                <div className="absolute left-0 bottom-0 ml-6 mb-6 w-full h-64 bg-black" />
                <img
                  className="relative w-full h-full"
                  src={props.two.imageURL}
                  alt=""
                />
              </div>
              <h2 className="text-4xl mb-4 font-heading">
                {props.two.title}
              </h2>
              <p>{props.two.description}</p>
              <div className="mt-4 mb-4 text-blue-700">
                <span>Click here to view</span>
              </div>
            </div>
          </a>
        </div>
      )}

      {props.three && (
        <div className="w-full md:w-1/2 lg:w-1/3 px-6 md:px-10 mb-16">
          <a className="block" href={props.three.url}  target="_blank" rel="noreferrer">
            <div className="max-w-xs mx-auto">
              <div className="relative mb-12 h-64">
                <div className="absolute right-0 bottom-0 -mr-6 -mb-6 w-full h-64 bg-black" />
                <img
                  className="relative w-full h-full"
                  src={props.three.imageURL}
                  alt=""
                />
              </div>
              <h2 className="text-4xl mb-4 font-heading">
                {props.three.title}
              </h2>
              <p>{props.three.description}</p>
              <div className="mt-4 mb-4 text-blue-700">
                <span>Click here to view</span>
              </div>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default ContentRow;
