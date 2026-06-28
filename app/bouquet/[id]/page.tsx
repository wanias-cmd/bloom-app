import { supabase } from "@/app/lib/supabase"
import BouquetViewer from "@/app/components/BouquetViewer"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ id: string }>
}

export default async function BouquetPage({ params }: Props) {
  const { id } = await params

  const { data, error } = await supabase
    .from("bouquets")
    .select("*")
    .eq("id", id)
    .single()

  if (error || !data) return notFound()

  return <BouquetViewer bouquet={data} />
}