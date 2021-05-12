import Form from "./Form"

function CreateSuperhero({setToggleFetch}) {
  return (
    <div>
      <h1 id="create-superhero-title">Create Superhero</h1>
      <Form setToggleFetch={setToggleFetch}/>
    </div>
  );
}

export default CreateSuperhero;
