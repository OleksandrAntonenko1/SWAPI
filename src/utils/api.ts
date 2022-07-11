export const getJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  if (!response.ok) throw new Error("Network response was not ok");

  return await response.json();
};
