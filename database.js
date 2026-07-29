async function loadProducts() {
  const { data, error } = await supabaseClient
    .from("products")
    .select("*")
    .order("id");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

async function saveProduct(product) {
  const { error } = await supabaseClient
    .from("products")
    .insert(product);

  if (error) console.error(error);
}

async function updateProduct(id, updates) {
  const { error } = await supabaseClient
    .from("products")
    .update(updates)
    .eq("id", id);

  if (error) console.error(error);
}

async function deleteProductDB(id) {
  const { error } = await supabaseClient
    .from("products")
    .delete()
    .eq("id", id);

  if (error) console.error(error);
}