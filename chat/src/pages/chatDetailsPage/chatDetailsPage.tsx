import { useState } from "react";
import { useProviderContext } from "../../hooks/useProviderHook/useProviderHook";

export function ChatDetailsPage() {
  const socket = useProviderContext();

  const [messages, setMessages] = useState<[]>();

  return <div></div>;
}
