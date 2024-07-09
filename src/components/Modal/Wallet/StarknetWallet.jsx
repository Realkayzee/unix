"use client";
import { useConnect } from "@starknet-react/core";

export default function starknetWallet() {
  const { connect, connectors } = useConnect();
  return (
    <ul>
      {connectors.map((connector) => (
        <li key={connector.id}>
          <button
            className="bg-button px-8 py-2 rounded-xl"
            onClick={() => connect({ connector })}
          >
            {`Connect ${connector.name}`}
          </button>
        </li>
      ))}
    </ul>
  );
}
