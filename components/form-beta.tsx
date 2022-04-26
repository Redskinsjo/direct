import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AiFillCheckCircle } from "react-icons/ai";

import FormField from "./form-field";
import { client } from "@/apollo";
import { CreateUser } from "@/apollo/queries";

export interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  notes: string;
  profile: string;
  business: string;
  //   password: string;
  //   "confirm-password": string;
}

type DataSubmit = FormValues | { [x: string]: string };

export const fields_original = [
  { label: "form-field-firstname", name: "firstname" },
  { label: "form-field-lastname", name: "lastname" },
  { label: "form-field-email", name: "email" },
  { label: "form-field-phone", name: "phone" },
  { label: "form-field-profile", name: "profile" },
  { label: "form-field-notes", name: "notes" },

  //   { label: "Mot de passe", name: "password" },
  //   { label: "Confirmation mot de passe", name: "confirm-password" },
];

const FormBeta: React.FC = () => {
  const [fields, setFields] = useState(fields_original);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      profile: "",
      notes: "",
      business: "",
    },
  });
  const [displayDone, setDisplayDone] = useState(false);
  const { t } = useTranslation();

  const onSubmit = async (data: DataSubmit) => {
    try {
      const userCreated = await client.mutate({
        mutation: CreateUser,
        variables: {
          data,
        },
      });
      reset();
      setDisplayDone(true);
    } catch (e: any) {
      setError(
        "email",
        { type: "Taken", message: e.message },
        { shouldFocus: true }
      );
    }
  };

  React.useEffect(() => {
    if (
      watch("profile") === "hôtelier" &&
      fields.findIndex((f) => f.name === "business") === -1
    ) {
      setFields([
        ...fields,
        { label: t("form-field-business"), name: "business" },
      ]);
    }

    if (watch("profile") === "voyageur") {
      const newFields = fields.filter((f) => f.name !== "business");
      setFields(newFields);
    }
  }, [watch("profile")]);

  React.useEffect(() => {
    if (displayDone) {
      setTimeout(() => {
        setDisplayDone(false);
      }, 4800);
    }
  }, [displayDone]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative bg-[#eee3] slideup-300 left-[500px] top-[250px] w-[500px] border-[1px] p-6 rounded-lg border-[#fff]"
    >
      <div className="gap-4 grid grid-cols-2 grid-rows-4">
        {fields.map((f) => (
          <FormField key={f.name} control={control} {...f} />
        ))}
      </div>
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}
      {displayDone && (
        <div className="flex items-center appear-disappear">
          <AiFillCheckCircle style={{ color: "rgb(74 222 128)" }} />
          <span className="text-green-400">
            Well done ! You will hear more from us soon.
          </span>
        </div>
      )}
      <div className="w-full flex justify-end mt-4">
        <Button
          type="submit"
          variant="contained"
          sx={{
            "& button:hover": {
              backgroundColor: "#FFD700dc",
            },
          }}
          style={{ backgroundColor: "gold", color: "black" }}
        >
          {t("form-action")}
        </Button>
      </div>
    </form>
  );
};
export default FormBeta;
