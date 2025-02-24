import { fetchBanner, fetchData } from "@/appwrite/data";
import Hero from "@/components/Hero";
import WaitList from "@/components/WaitList";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function Home({searchParams}) {
  cookies();
  let data = null;
  let banner = null;


  try {
    data = await fetchData();
    banner = await fetchBanner();
  } catch (error) {
    console.error("Server is down or unresponsive:", error);
  }

  if (!data || !banner) {
    // Return loading state if data or banner is not available
    return <Loader />;
  }

  const referCode = searchParams?.referCode ?? null;
  return (
    <>
      <Hero />
      <WaitList waitList={data.WaitListData} referCode={referCode} />
    </>
  );
}
