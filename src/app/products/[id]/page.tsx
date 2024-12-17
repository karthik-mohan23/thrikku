async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <section className="max-w-5xl mx-auto">page : {id}</section>;
}
export default page;
