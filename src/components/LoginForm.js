import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as yup from "yup";

const schema = yup.object().shape({
  userName: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password must have at least 4 characters")
});

function LoginForm() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  function onSubmit(data) {
    console.log("data", data);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="userName"
            placeholder="Enter your username"
            ref={register}
          />
          {errors.userName && <p>{errors.userName.message}</p>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            placeholder="Enter your password"
            ref={register}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default LoginForm;
