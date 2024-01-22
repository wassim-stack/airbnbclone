import { format } from "date-fns";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import { getSearchResult } from "../utils/api";
import { SearchResultData } from "../types/app";
import ListingCard from "../components/ListingCard";

type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuest: string;
};
const SearchResult = async ({
  searchParams: { location, startDate, endDate, numOfGuest },
}: {
  searchParams: SearchParams;
}) => {
  const filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More filters",
  ];
  let formatedStartDate;
  let formatedEndDate;
  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  }
  const range = `${formatedStartDate}-${formatedEndDate}`;
  const searchResultData: SearchResultData = await getSearchResult();
  return (
    <>
      <Header placeholder={`${location} |${range}| ${numOfGuest}`} />
      <main>
        <section className="pt-14">
          <div className="container">
            <p className="text-xs">
              300+ Stays - {range} - for {numOfGuest} guests
            </p>
            <h1 className="text-3xl font-semibold mt-2 mb-6">
              Stays un {location}
            </h1>
            <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
              {filters.map((filter, i) => (
                <button key={i} className="filter-btn">
                  {filter}
                </button>
              ))}
            </div>
            {searchResultData.map((listing, i) => (
              <ListingCard
                key={i}
                img={listing.img}
                title={listing.title}
                location={listing.location}
                description={listing.description}
                price={listing.price}
                total={listing.total}
                star={listing.star}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SearchResult;
