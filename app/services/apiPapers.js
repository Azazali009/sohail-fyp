import supabase from "../supabase/supabase";

export async function getAllPapers() {
  let { data: Publication, error } = await supabase
    .from("Publication")
    .select("*");

  if (error) {
    console.log("Error getting papers", error);
    throw new Error("Error while fetching papers");
  }

  return Publication;
}
export async function getPaperByFilter({ filterField, filterValue }) {
  console.log(filterField, filterValue);
  let { data: Publication, error } = await supabase
    .from("Publication")
    .select("*")
    .eq(filterField, filterValue);

  if (error) {
    console.log("Error getting papers", error);
    throw new Error("Error while fetching papers");
  }
  console.log(Publication);

  return Publication;
}
export async function getSinglePaper(id) {
  let { data, error } = await supabase
    .from("Publication")
    .select("*")
    .eq("id", id);

  if (error) {
    console.log("Error getting papers", error);
    throw new Error("Error to load paper data");
  }

  return data[0];
}
