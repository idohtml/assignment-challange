import Button from "../components/Button";

export default function Form() {
  return (
    <form className="flex flex-col items-start justify-between h-full w-full">
      <div className="flex flex-wrap justify-between w-full">
        <div className="flex flex-col">
          <label className="font-light text-md mb-0.5" htmlFor="name">
            First Name
          </label>
          <input
            className="border border-gray-300 bg-transparent rounded-md p-2"
            type="text"
            id="name"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-light text-md mb-0.5" htmlFor="name">
            Last name
          </label>
          <input
            className="border border-gray-300 bg-transparent rounded-md p-2"
            type="text"
            id="name"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="font-light text-md mb-0.5" htmlFor="name">
            Phone number
          </label>
          <input
            className="border border-gray-300 bg-transparent rounded-md p-2"
            type="number"
            id="name"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="font-light text-md mb-0.5" htmlFor="name">
            Subject line
          </label>
          <input
            className="border border-gray-300 bg-transparent rounded-md p-2"
            type="number"
            id="name"
          />
        </div>
        <div className="flex flex-col mt-4 w-full">
          <label className="font-light text-md mb-0.5" htmlFor="message">
            Message
          </label>
          <textarea
            className="border border-gray-300 bg-transparent rounded-md p-2"
            rows={5}
          />
        </div>
      </div>
      <Button variant="primary">Send</Button>
    </form>
  );
}
