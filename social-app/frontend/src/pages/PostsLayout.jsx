import { Outlet } from "react-router-dom";
import CreateMemory from "../components/CreateMemory";
import SearchForm from "../components/SearchForm";

function PostsLayout() {
  return (
    <section className="container">
      <div className="row mt-3">
        <div className="col-md-8">
          <div className="row row-gap-3">
            <Outlet />
          </div>
        </div>
        <div className="col-md-4">
          <SearchForm />
          <div className="box mt-3">
            <CreateMemory />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostsLayout;
