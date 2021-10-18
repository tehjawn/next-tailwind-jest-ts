const CtaButton = ({ children }: any) => {
  return (
    <div
      className="inline-block w-max shadow-2xl rounded-md flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
    >
      {children}
    </div>
  );
};

export default CtaButton;
