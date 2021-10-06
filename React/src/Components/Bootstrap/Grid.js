import React from "react";

function Grid() {
  return (
    // <div className="container bg-primary mt-5 text-white p-5">
    //   <p>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam incidunt
    //     voluptate doloremque aliquam voluptatem recusandae nesciunt aut ipsum
    //     doloribus laboriosam accusantium beatae, hic libero. Quidem blanditiis
    //     vitae error suscipit quis nesciunt, ab vero. Deserunt laudantium minima
    //     delectus totam odio autem aliquid ipsum beatae sint, mollitia explicabo
    //     voluptas illum? Dolorum, voluptas deleniti maxime inventore asperiores
    //     molestias qui ab, quam vero libero nulla molestiae ea minus placeat,
    //     modi voluptatibus perspiciatis odio. Vero aspernatur minus, minima
    //     laboriosam, vitae saepe, doloremque porro nobis ut voluptatum amet eos
    //     eligendi nam nisi sequi! Dolor repudiandae vitae modi velit consectetur
    //     debitis deserunt quo, et iste reiciendis ex dolores beatae ipsam
    //     blanditiis? Eligendi praesentium alias itaque architecto, quae quibusdam
    //     minima officia rem, officiis ipsum iure distinctio aliquid dignissimos
    //     quos quam necessitatibus, sunt quis reiciendis! Totam ipsam animi fugit,
    //     provident rem quia tempora ad dicta sit tempore itaque suscipit, laborum
    //     quisquam similique alias nam rerum, dolorem distinctio explicabo vel!
    //   </p>
    // </div>
    <div className="container bg-danger p-5 mt-5">


    <div className="row bg-primary p-5 mt-3">
    <div className="col-1 bg-danger">C1</div>
    <div className="col-1 bg-warning">C1</div>
    <div className="col-1 bg-secondary">C1</div>
    <div className="col-1">C1</div>
    <div className="col-1">C1</div>
    <div className="col-1">C1</div>
    <div className="col-1">C1</div>
    <div className="col-1">C1</div>
    <div className="col-1">C1</div>
    <div className="col-1">C1</div>
    <div className="col-1">C1</div>
    <div className="col-1">C1</div>


    </div>




    <div className="row bg-secondary p-5 mt-3">
      <div className="col-6 bg-warning ">C1</div>
      <div className="col-6 bg-danger ">C1</div>

    </div>
    <div className="row bg-info p-5 mt-3">
        <div className="col-4 bg-warning">C1</div>
        <div className="col-4 bg-danger">C3</div>
        <div className="col-4 bg-primary">C3</div>
    </div>
    <div className="row bg-warning p-5 mt-3">R4</div>
    </div>
  );
}
export default Grid;
