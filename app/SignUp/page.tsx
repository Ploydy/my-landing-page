import { Button, Card, CardBody, Checkbox, Input } from "@nextui-org/react";
import React from "react";

const SignUp = () => {
  return (
    <>
      <section className="py-12 bg-slate-700 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-md mx-auto text-center">
            <Card className="my-20 py-10">
              <h1>Sign Up</h1>
              <CardBody>
                <Input
                  className="py-1"
                  type="email"
                  name="email"
                  placeholder="Email"
                />

                <Input
                  className="py-1 "
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <Input
                  className="py-1 "
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                />
                <Checkbox className="py-4">Remember me</Checkbox>
                <Button>Sign In</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
