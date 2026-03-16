import { useMemo, useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";
import { interestAreas, workshops, type InterestArea } from "@/lib/workshops";

type WorkshopSignupFormProps = {
  selectedWorkshopId: string;
  onWorkshopChange: (workshopId: string) => void;
};

type WorkshopRegistrationValues = {
  areaOfInterest: InterestArea | "";
  email: string;
  firstName: string;
  goal: string;
  grade: string;
  lastName: string;
  school: string;
};

const initialValues: WorkshopRegistrationValues = {
  areaOfInterest: "",
  email: "",
  firstName: "",
  goal: "",
  grade: "",
  lastName: "",
  school: "",
};

type RegistrationField = keyof WorkshopRegistrationValues;

const validateField = (field: RegistrationField, values: WorkshopRegistrationValues) => {
  const value = values[field].trim();

  switch (field) {
    case "firstName":
    case "lastName":
    case "school":
      return value.length >= 2 ? "" : "Please complete this field.";
    case "email":
      return /\S+@\S+\.\S+/.test(value) ? "" : "Please enter a valid email address.";
    case "grade":
      return value ? "" : "Please tell us your grade.";
    default:
      return "";
  }
};

export const WorkshopSignupForm = ({
  onWorkshopChange,
  selectedWorkshopId,
}: WorkshopSignupFormProps) => {
  const [errors, setErrors] = useState<Partial<Record<RegistrationField, string>>>({});
  const [formError, setFormError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState<WorkshopRegistrationValues>(initialValues);

  const selectedWorkshop = useMemo(
    () => workshops.find((workshop) => workshop.id === selectedWorkshopId) ?? workshops[0],
    [selectedWorkshopId],
  );

  const setFieldValue = <K extends RegistrationField>(field: K, value: WorkshopRegistrationValues[K]) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: "" }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<Record<RegistrationField, string>> = {};
    (Object.keys(initialValues) as RegistrationField[]).forEach((field) => {
      const message = validateField(field, values);
      if (message) {
        nextErrors[field] = message;
      }
    });

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setFormError("");
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("workshop_registrations").insert({
        workshop_id: selectedWorkshop.id,
        workshop_title: selectedWorkshop.title,
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        grade: values.grade,
        school: values.school,
        area_of_interest: values.areaOfInterest || null,
        high_school_goal: values.goal.trim() || null,
      });

      if (error) {
        throw error;
      }

      setIsSubmitted(true);
      setValues(initialValues);
    } catch (error) {
      console.error("Failed to register for workshop", error);
      setFormError(
        "We couldn't complete your registration yet. Confirm the workshop registrations table and insert policy are set up in Supabase, then try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-[2rem] border border-primary/20 bg-primary/10 p-8 text-foreground">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/15 text-primary">
          <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="mt-6 text-3xl font-semibold text-foreground">You're registered!</h3>
        <p className="mt-3 max-w-2xl text-base leading-7 text-foreground/75">
          We’ll send workshop details to your email.
        </p>
        <Button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-6 rounded-full bg-primary px-6 py-6 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground hover:bg-primary/90"
        >
          Register another student
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7" data-form="workshop-registration">
      <div>
        <p className="text-xs uppercase tracking-[0.26em] text-primary">Registration</p>
        <h3 className="mt-2 text-3xl font-semibold text-foreground">Save your seat</h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
          Free for ambitious Grade 9-10 students. We keep sessions intentionally small to allow for discussion and
          live Q&amp;A.
        </p>
      </div>

      <div className="rounded-[1.6rem] border border-primary/18 bg-primary/8 p-4">
        <Label htmlFor="selected-workshop" className="text-xs uppercase tracking-[0.24em] text-primary/80">
          Selected Workshop
        </Label>
        <select
          id="selected-workshop"
          value={selectedWorkshop.id}
          onChange={(event) => onWorkshopChange(event.target.value)}
          className="mt-3 h-14 w-full rounded-2xl border border-white/10 bg-background/70 px-4 text-sm text-foreground outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/40"
        >
          {workshops.map((workshop) => (
            <option key={workshop.id} value={workshop.id}>
              {workshop.title}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field
          error={errors.firstName}
          id="firstName"
          label="First Name"
          onChange={(value) => setFieldValue("firstName", value)}
          value={values.firstName}
        />
        <Field
          error={errors.lastName}
          id="lastName"
          label="Last Name"
          onChange={(value) => setFieldValue("lastName", value)}
          value={values.lastName}
        />
        <Field
          error={errors.email}
          id="email"
          label="Email"
          onChange={(value) => setFieldValue("email", value)}
          type="email"
          value={values.email}
        />
        <Field
          error={errors.grade}
          id="grade"
          label="Grade"
          onChange={(value) => setFieldValue("grade", value)}
          placeholder="Grade 9 or Grade 10"
          value={values.grade}
        />
        <Field
          className="md:col-span-2"
          error={errors.school}
          id="school"
          label="School"
          onChange={(value) => setFieldValue("school", value)}
          value={values.school}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="areaOfInterest" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Area of Interest
          </Label>
          <select
            id="areaOfInterest"
            value={values.areaOfInterest}
            onChange={(event) => setFieldValue("areaOfInterest", event.target.value as InterestArea | "")}
            className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-foreground outline-none transition focus:border-primary/45 focus:ring-2 focus:ring-primary/45"
          >
            <option value="">Select an area</option>
            {interestAreas.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <Field
          id="goal"
          label="One thing you'd like to achieve in high school"
          onChange={(value) => setFieldValue("goal", value)}
          placeholder="Optional"
          value={values.goal}
        />
      </div>

      {formError ? (
        <p className="rounded-2xl border border-primary/20 bg-primary/8 px-4 py-3 text-sm text-primary">{formError}</p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">You're registered! We’ll send workshop details to your email.</p>
        <Button
          type="submit"
          disabled={isSubmitting}
          data-cta="workshop-submit"
          data-workshop-id={selectedWorkshop.id}
          className="rounded-full bg-primary px-7 py-6 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground hover:bg-primary/90"
        >
          {isSubmitting ? "Registering..." : "Register"}
        </Button>
      </div>
    </form>
  );
};

type FieldProps = {
  className?: string;
  error?: string;
  id: string;
  label: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  value: string;
};

const Field = ({ className, error, id, label, onChange, placeholder, type = "text", value }: FieldProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id} className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className="h-14 rounded-2xl border-white/10 bg-white/[0.04] px-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-primary/45"
      />
      {error ? <p className="text-sm text-primary">{error}</p> : null}
    </div>
  );
};
