import Link from "next/link";

export function Pagination({
  baseUrl = '/blog', // Default baseUrl
  page,
  perPage,
  total,
}: {
  baseUrl?: string; // Default to '/blog'
  page: number;
  perPage: number;
  total: number;
}) {
  return (
    <div className="pt-10">
      {page !== 1 && (
        <>
          <Link href={`${baseUrl}/${page - 1}`} rel="prev">
            Previous
          </Link>{" "}
        </>
      )}
      {perPage * page < total && (
        <Link href={`${baseUrl}/${page + 1}`} rel="next">
          Next
        </Link>
      )}
    </div>
  );
}
