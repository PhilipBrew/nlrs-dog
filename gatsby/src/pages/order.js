import React, { useState } from "react";
import sanityClient from "@sanity/client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

import { graphql } from "gatsby";
import SEO from "../components/SEO";
import StyledForm from "../styles/FormStyles";
import { SubmitButton } from "../components/Buttons";
import Loader from "../components/Loader";
import client from "../utils/sanityClient";

import useForm from "../hooks/useForm";
import { useAppContext } from "../providers/AppProvider";
import { defaultOrderForm } from "../hooks/defaults";
import orderTimes from "../utils/orderTimes";
import { timeStringBuilder } from "../utils/functions";

const OrderPage = ({ data: { allSanityOrder } }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState(false);
  const [utcDateTime, setUtcDateTime] = useState(null);

  const { order, setOrder } = useAppContext();
  const { values, updateValue } = useForm(defaultOrderForm);
  const { name, email, phone, dogName } = values;

  const { nodes: orderDateTimes } = allSanityOrder;

  const handleSubmit = (e) => {
    e.preventDefault();

    client.create(order).then((res) => {
      console.log("RES ------>", res);
    });
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    const todayOrderDateTime = orderDateTimes.filter(
      ({ time }) =>
        new Date(time).toDateString() === new Date(date).toDateString()
    );

    const times = todayOrderDateTime.map((order) =>
      new Date(Object.values(order)).toLocaleTimeString("en-GB")
    );

    let availableTimes = orderTimes;
    times.forEach((unavailableTime) => {
      availableTimes = availableTimes.filter(
        (availableTime) => availableTime !== unavailableTime
      );
    });

    setTimeSlots(availableTimes);
  };

  const handleTimeSelect = (event) => {
    const hours = event.target.value.split(":")[0];
    selectedDate.setHours(hours);
    selectedDate.setMinutes(0);
    selectedDate.setSeconds(0);
    const selectedDateTime = selectedDate.toISOString();
    setUtcDateTime(selectedDateTime);
    setOrder({
      ...order,
      time: selectedDateTime,
    });
  };

  const handleImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setOrder({
        ...order,
        vaccination: reader.result,
      });
    };
  };

  return (
    <>
      <SEO title="Book a time slot" />
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <legend>Your Info</legend>
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={updateValue}
            required
          />

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={updateValue}
            required
          />

          <label htmlFor="phone">Phone*</label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={updateValue}
            required
          />
        </fieldset>

        <fieldset>
          <legend>Time Slot</legend>
          <label htmlFor="date">Select a date</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => handleDateSelect(date)}
          />
          {timeSlots && (
            <>
              <label htmlFor="timeSlots">Select an available time slot</label>
              <select
                name="timeSlots"
                onChange={(event) => handleTimeSelect(event)}
              >
                {timeSlots.map((slot, i) => (
                  <option key={`${i}-${slot}`} value={slot}>
                    {timeStringBuilder(slot)}
                  </option>
                ))}
              </select>
            </>
          )}
        </fieldset>

        <fieldset>
          <legend>Dog Info</legend>
          <label htmlFor="dogName">Dog Name</label>
          <input
            type="text"
            name="dogName"
            value={dogName}
            onChange={updateValue}
          />
          <DogImgContainer>
            <label htmlFor="vaccinationImg">Vaccination Proof</label>
            <SubmitImgButton
              name="vaccinationImg"
              type="file"
              mt={30}
              text="Add New Image"
              accept="image/*"
              onChange={(e) => handleImage(e)}
            />
          </DogImgContainer>
        </fieldset>
        <SubmitButton
          onClick={(e) => handleSubmit(e)}
          br={5}
          mt={16}
          value="Place Order"
        />
      </StyledForm>
    </>
  );
};

export default OrderPage;

export const query = graphql`
  query OrderTimes {
    allSanityOrder {
      nodes {
        time
      }
    }
  }
`;

const DogImgContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 2rem;
  margin-left: 0;
  h2 {
    margin-bottom: 2rem;
  }
  img {
    object-fit: contain;
  }
`;
const SubmitImgButton = styled.input`
  margin-top: 2rem;
  padding-left: 0 !important;
`;
