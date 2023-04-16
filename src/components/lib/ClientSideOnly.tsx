import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function ClientSideOnly({ children }: Props) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

  return hasMounted ? <>{children}</> : null;
}
