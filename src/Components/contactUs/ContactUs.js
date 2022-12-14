import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data, "contactus");
    toast.success("Your query is recorded ");

    axios
      .post(
        "https://uat.ordering-farmshop.ekbana.net/api/v4/contact-us",
        {
          message: data.Message,
          name: data.Name,
          email: data.Email,
          subject: data.Subject,
          contact: data.Phone,
        },
        {
          headers: {
            "Api-Key": "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx",
            "Warehouse-Id": "1",
          },
        }
      )
      .then((response) => {
        console.log(response, "contact sucess");
        reset();
      })
      .catch((error) => {
        console.log(error, "Contact failed");
      });
  };

  return (
    <div>
      <div class="breadcrumbs">
        <div class="container">
          <ol
            class="breadcrumb breadcrumb1 animated wow slideInLeft"
            data-wow-delay=".5s"
          >
            <li>
              <a href="index.html">
                <span
                  class="glyphicon glyphicon-home"
                  aria-hidden="true"
                ></span>
                Home
              </a>
            </li>
            <li class="active">ContactUs</li>
          </ol>
        </div>
      </div>

      <div class="about">
        <div class="w3_agileits_contact_grids">
          <div class="col-md-6 w3_agileits_contact_grid_left">
            {/* Problem on google map start */}
            {/* <div class="agile_map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.3905851087434!2d-34.90500565012194!3d-8.061582082752993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18d90992e4ab%3A0x8e83c4afabe39a3a!2sSport+Club+Do+Recife!5e0!3m2!1sen!2sin!4v1478684415917"
                style="border:0"
              ></iframe>
            </div> */}
            {/* problem on google map end */}
            <div class="agileits_w3layouts_map_pos">
              <div class="agileits_w3layouts_map_pos1">
                <h3>Contact Info</h3>
                <p>1234k Avenue, 4th block, New York City.</p>
                <ul class="wthree_contact_info_address">
                  <li>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </li>
                  <li>
                    <i class="fa fa-phone" aria-hidden="true"></i>+(0123) 232
                    232
                  </li>
                </ul>
                <div class="w3_agile_social_icons w3_agile_social_icons_contact">
                  <ul>
                    <li>
                      <a href="#" class="icon icon-cube agile_facebook"></a>
                    </li>
                    <li>
                      <a href="#" class="icon icon-cube agile_rss"></a>
                    </li>
                    <li>
                      <a href="#" class="icon icon-cube agile_t"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 w3_agileits_contact_grid_right">
            <h2 class="w3_agile_header">
              Leave a<span> Message</span>
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <span class="input input--ichiro">
                <input
                  {...register("Name")}
                  class="input__field input__field--ichiro"
                  type="text"
                  id="input-25"
                  name="Name"
                  placeholder=" "
                  required=""
                />
                <label class="input__label input__label--ichiro" for="input-25">
                  <span class="input__label-content input__label-content--ichiro">
                    Your Name
                  </span>
                </label>
              </span>
              <span class="input input--ichiro">
                <input
                  {...register("Email")}
                  class="input__field input__field--ichiro"
                  type="email"
                  id="input-26"
                  name="Email"
                  placeholder=" "
                  required=""
                />
                <label class="input__label input__label--ichiro" for="input-26">
                  <span class="input__label-content input__label-content--ichiro">
                    Your Email
                  </span>
                </label>
              </span>
              <span class="input input--ichiro">
                <input
                  {...register("Phone")}
                  class="input__field input__field--ichiro"
                  type="text"
                  id="input-27"
                  name="Phone"
                  placeholder=" "
                  required=""
                />
                <label class="input__label input__label--ichiro" for="input-27">
                  <span class="input__label-content input__label-content--ichiro">
                    Your Phone
                  </span>
                </label>
              </span>
              <span class="input input--ichiro">
                <input
                  {...register("Subject")}
                  class="input__field input__field--ichiro"
                  type="text"
                  id="input-28"
                  name="Subject"
                  placeholder=" "
                  required=""
                />
                <label class="input__label input__label--ichiro" for="input-28">
                  <span class="input__label-content input__label-content--ichiro">
                    Your Subject
                  </span>
                </label>
              </span>
              <textarea
                {...register("Message")}
                name="Message"
                placeholder="Your message here..."
                required=""
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div class="clearfix"> </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
