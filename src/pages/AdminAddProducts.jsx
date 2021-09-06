import React from "react";
import addCSS from "../styles/addproduct.module.css";

const AdminAddProducts = () => {
  return (
    <div className={addCSS.body}>
      <h3>Add Products</h3>

      <div className={addCSS.firstrow}>
        <div className={addCSS.action_text}>
          <p>Upload your product image here </p>
        </div>

        <div className={addCSS.upload_space}>
          <div className={addCSS.upload_area}>
            <div className={addCSS.upload_content}>
              <div className={addCSS.icon}>
                <img src="/img/upload.svg" alt="" />
              </div>
              <div className={addCSS.text}>
                <p>
                  <span>drag/upload</span> your images here. <br /> Maximum of 5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={addCSS.secondrow}>
        <div className={addCSS.action_text}>
          <p>
            Add your Product description and necessary <br /> information here{" "}
          </p>
        </div>

        <div className={addCSS.form_space}>
          <form action="POST">
            <div className={addCSS.form_input}>
              <label htmlFor="">Product Name</label>
              <input type="text" className={addCSS.input} />
            </div>
            <div className={addCSS.form_input}>
              <label htmlFor="">Product Category</label>
              <select name="" id="" className={addCSS.input}>
                <option value="Vegetables" disabled>
                  Product Category
                </option>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Meat">Meat</option>
                <option value="Grains">Grains</option>
              </select>
            </div>
            <div className={addCSS.form_input}>
              <label htmlFor="">Product description</label>
              <input type="text" className={addCSS.input} />
            </div>
            <div className={addCSS.form_input}>
              <label htmlFor="">Total Available Units</label>
              <input type="text" className={addCSS.input} />
            </div>
            <div className={addCSS.form_input}>
              <label htmlFor="">Units</label>
              <input type="text" className={addCSS.input} />
            </div>
            <div className={addCSS.form_input}>
              <label htmlFor="">Price(₦)</label>
              <input type="text" className={addCSS.input} />
            </div>
            <div className={addCSS.form_input}>
              <label htmlFor="">Discount Price(₦)</label>
              <input type="text" className={addCSS.input} />
            </div>
          </form>
        </div>
      </div>

      <div className="third_row">
        <div>
          <button className="cancel_btn">
            y
          </button>
        </div>
        <div>
          <button className="create_btn">
            g
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminAddProducts;
