const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex  flex-col justify-center items-center p-2 lg:p-4">
      <div className="flex flex-col">
        <div className="max-w-xl text-3xl font-bold ">
          "The costumer service i recieved was exceptional. The support team
          went above and beyond to adress my concerns."
        </div>

        <div className="max-w-m  text-xl font-semibold mt-1">
          Julies Winfield
        </div>
        <div className="max-w-m text-start text-sm mt-0 font-light text-slate-400 ">
          CEO | Acme corp
        </div>
      </div>
    </div>
  );
};

export default Quote;
