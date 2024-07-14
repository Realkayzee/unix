const AccountAnimation = () => {
    return (
        <div className="p-5 flex flex-col gap-4">
            {Array.from({ length: 4}).map((_, index) => (
                <div
                key={index}
                className="flex item-center bg-black-1 justify-between rounded-2xl border-button-1 border-2 p-2"
                >
                    <div className="flex gap-2">
                        <p className="mr-4 my-auto h-3 w-2 bg-gray-700 animate-pulse"></p>
                        <p className="mr-4 my-auto h-3 w-96 bg-gray-700 animate-pulse"></p>
                    </div>
                    <div className="flex gap-4 align-center">
                        <p className="h-8 w-28 bg-gray-700 animate-pulse rounded-xl"></p>
                        <p className="h-8 w-28 bg-gray-700 animate-pulse rounded-xl"></p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AccountAnimation;