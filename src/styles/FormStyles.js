import styled from 'styled-components';

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  fieldset {
    display: grid;
    gap: 1rem;
    grid-column: span 2;
    margin-bottom: 2rem;
    max-width: 100%;
    overflow: visible;
    legend {
      display: block;
      padding: 0 2rem;
    }
    label {
      display: grid;
      gap: 1rem;
      align-content: start;
      margin-top: 2rem;
      :first-of-type {
        margin-top: 0;
      }
    }
    label + label {
      margin-top: 1rem;
    }
    select {
      height: 4rem;
      padding: 0 2rem;
    }
    input:not([disabled]):not([type='submit']) {
      height: 4rem;
      padding: 0 2rem;
    }
    &.order,
    &.menu {
      grid-column: span 1;
      /* Chrome is weird about Grid and fieldsets, so we add a fixed height to fix it :)  */
      height: 600px;
    }
  }
  .mapleSyrup {
    display: none;
  }
  @media (max-width: 900px) {
    fieldset.menu,
    fieldset.order {
      grid-column: span 2;
    }
  }
`;

export default StyledForm;
