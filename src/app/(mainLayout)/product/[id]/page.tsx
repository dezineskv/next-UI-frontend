import SingleTodo from "@/components/SingleTodo";

const ProductId = async ({ params }: { params: Promise<{ id: number }> }) => {
  const id = (await params).id;

  return <SingleTodo id={id} />;
};

export default ProductId;
