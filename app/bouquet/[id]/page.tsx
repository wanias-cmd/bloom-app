import { supabase } from "../../lib/supabase"
import BouquetViewer from "../../components/BouquetViewer"
import { notFound } from "next/navigation"

export default async function BouquetPage({ params }: { params: { id: string } }) {
  const { data, error } = await supabase
    .from("bouquets")
    .select("*")
    .eq("id", params.id)
    .single()

  if (error || !data) return notFound()

  return <BouquetViewer bouquet={data} />
}