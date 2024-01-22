import React from "react";
import { redirect } from "next/navigation";

const sendPage = () => {
  redirect(
    `https://c733d9mcooj5wzekv1qh01hdfs.hop.clickbank.net/?tid=filiphis`
  ); // Navigate to the new post page
};

const Page = () => {
  return <main className="full-screen" onLoad={sendPage()}></main>;
};

export default Page;
