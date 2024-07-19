import { useEffect, useState } from "react";
import FileParser from "../utils/FileParser";
import Post from "../services/Post";
import Tags from "../services/Tags";

function CreateMemory() {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState({
    title: "",
    body: "",
    isPublic: true,
    tags: [],
    image: "",
  });

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    let file = e.target.files[0];
    FileParser(file)
      .then((res) => {
        setInput({ ...input, image: res });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    Tags.getAll()
      .then((res) => {
        setTags(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    Post.addNew(input)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleResetForm = (e) => {
  //   // e.preventDefault();
  //   console.log("reset");
  //   //reset();
  // };
  return (
    <>
      <h5 className="text-center">Create memory</h5>
      <form
        className="mt-3 d-flex flex-column row-gap-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="form-control mb-3"
          onInput={handleInputChange}
          value={input.title}
        />
        <textarea
          name="body"
          className="form-control"
          cols="30"
          rows="10"
          onInput={handleInputChange}
          value={input.body}
        ></textarea>
        <p className="fs-6">Tags</p>
        <hr />

        <div className="form-control d-flex flex-wrap gap-2">
          <TagsCBX tags={tags} input={input} setInput={setInput} />
        </div>

        <div className="form-control d-flex justify-content-center flex-wrap gap-2">
          <div className="cursor-pointer bg-dark bg-opacity-25 rounded-2 px-1 user-select-none">
            <input
              id="radio-public"
              type="radio"
              name="isPublic"
              onChange={() => {
                setInput({ ...input, isPublic: true });
              }}
              checked={input.isPublic}
              value={input.isPublic}
            />
            <label htmlFor="radio-public">Public</label>
          </div>
          <div className="cursor-pointer bg-dark bg-opacity-25 rounded-2 px-1 user-select-none">
            <input
              id="radio-private"
              type="radio"
              name="isPublic"
              onChange={() => {
                setInput({ ...input, isPublic: false });
              }}
              value={input.isPublic}
            />
            <label htmlFor="radio-private">Private</label>
          </div>
        </div>

        <input
          type="file"
          onChange={imageHandler}
          className="form-control"
          name="image"
        />

        <button type="submit" className="form-control btn btn-primary">
          Create
        </button>
        {/* <button
          type="reset"
          onClick={handleResetForm}
          className="form-control btn btn-danger"
        >
          Clear
        </button> */}
      </form>
    </>
  );
}

export default CreateMemory;

const TagsCBX = ({ tags, input, setInput }) => {
  const handleInputCheck = (e) => {
    let tags = [...input.tags];
    if (tags.includes(e.target.value)) {
      tags = tags.filter((tag) => tag !== e.target.value);
    } else {
      tags.push(e.target.value);
    }
    setInput({ ...input, tags });
  };
  return tags.map((tag) => {
    return (
      <div
        key={tag._id}
        className="cursor-pointer d-flex bg-dark bg-opacity-25 rounded-2 px-1 user-select-none"
      >
        <input
          type="checkbox"
          name="tags"
          id={tag._id}
          value={tag.name}
          onChange={handleInputCheck}
        />
        <label htmlFor={tag._id}>#{tag.name}</label>
      </div>
    );
  });
};
