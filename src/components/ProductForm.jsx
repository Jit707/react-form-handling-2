import { useState } from "react";

function ProductForm() {
const [name ,setName]=useState("")
const [image ,setImage]=useState("")
const [price ,setPrice]=useState("")
const [description ,setDescription]=useState("")

function handleName(event) {
  return setName(event.target.value)
}
function handleImage(event) {
  return setImage(event.target.value)
}
function handlePrice(event) {
  return setPrice(event.target.value)
}
function handleDescription(event) {
  return setDescription(event.target.value)
}

function handleChang(event) {
  event.preventDefault()
  const data={
    name : name,
    imageInfo : image,
    priceInfo : price,
    descriptionInfo : description
  }
  return alert(JSON.stringify(data))
}


  return (
    <form onSubmit={handleChang} className="post-form">
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={name}
            onChange={handleName}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={image}
            onChange={handleImage}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={price}
            onChange={handlePrice}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={description}
            onChange={handleDescription}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
