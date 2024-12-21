import React from "react";
import { useCurrentUser } from "../users/providers/UserProvider";

export default function HomePage() {
	const { user } = useCurrentUser();
	return <div>{JSON.stringify(user)}</div>;
}
