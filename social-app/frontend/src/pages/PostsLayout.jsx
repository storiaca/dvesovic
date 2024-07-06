import { Outlet } from "react-router-dom";
import CreateMemory from "../components/CreateMemory";

function PostsLayout(props) {
  return (
    <section className="container">
      <div className="row mt-3">
        <div className="col-md-8">
          <div className="row row-gap-3">
            <Outlet />
          </div>
        </div>
        <div className="col-md-4">
          <div className="box">
            <h2>Search form</h2>
          </div>
          <div className="box mt-3">
            <CreateMemory />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostsLayout;
