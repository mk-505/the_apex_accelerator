import { useMemo, useState, type FormEvent } from "react";
import { CheckCircle2, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";
import { workshops } from "@/lib/workshops";

type WorkshopSignupFormProps = {
  selectedWorkshopId: string;
  onWorkshopChange: (workshopId: string) => void;
};

type WorkshopRegistrationValues = {
  email: string;
  fullName: string;
  grade: string;
  heardFrom: string;
  heardFromPage: string;
  registrantType: string;
  school: string;
  studentGoal: string;
};

const initialValues: WorkshopRegistrationValues = {
  email: "",
  fullName: "",
  grade: "",
  heardFrom: "",
  heardFromPage: "",
  registrantType: "",
  school: "",
  studentGoal: "",
};

const youtubeVideoId = "cXcF-2xcSL0";
const youtubeEmbedSrc = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
const youtubeThumbnailSrc = `https://i.ytimg.com/vi/${youtubeVideoId}/maxresdefault.jpg`;

type RegistrationField = keyof WorkshopRegistrationValues;

const validateField = (field: RegistrationField, values: WorkshopRegistrationValues) => {
  const value = values[field].trim();

  switch (field) {
    case "fullName":
      return value.length >= 2 ? "" : "Please complete this field.";
    case "email":
      return /\S+@\S+\.\S+/.test(value) ? "" : "Please enter a valid email address.";
    case "grade":
      return values.registrantType === "Student" && !value ? "Please tell us your grade." : "";
    case "school":
      return values.registrantType === "Student" && value.length < 2 ? "Please tell us your high school." : "";
    case "heardFrom":
      return value ? "" : "Please tell us how you heard about us.";
    case "heardFromPage": {
      const shouldAsk = values.heardFrom === "TikTok" || values.heardFrom === "Instagram";
      if (!shouldAsk) return "";
      return value.length >= 2 ? "" : "Please tell us whose page it was.";
    }
    case "registrantType":
      return value ? "" : "Please choose Student or Parent.";
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
  const [hasStartedVideo, setHasStartedVideo] = useState(false);
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
        full_name: values.fullName,
        email: values.email,
        registrant_type: values.registrantType,
        grade: values.registrantType === "Student" ? values.grade : null,
        school: values.registrantType === "Student" ? values.school.trim() : null,
        heard_from: values.heardFrom,
        heard_from_page:
          values.heardFrom === "TikTok" || values.heardFrom === "Instagram" ? values.heardFromPage.trim() : null,
        student_goal: values.registrantType === "Student" ? values.studentGoal.trim() || null : null,
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
        <h3 className="mt-6 text-3xl font-semibold text-foreground">Thank you. We have received your registration.</h3>
        <p className="mt-3 max-w-2xl text-base leading-7 text-foreground/75">
          You will receive an email with details on how to join the event closer to the date.
        </p>
        <div className="mt-8">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">Learn More About Apex</p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/75">
            If you'd like to learn more in the meantime, watch this short video about Apex.
          </p>
          <div className="relative mt-5 aspect-video overflow-hidden rounded-[1.6rem] border border-primary/18 bg-black/30">
            {hasStartedVideo ? (
              <iframe
                className="h-full w-full"
                src={youtubeEmbedSrc}
                title="Apex Accelerator introduction video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src={youtubeThumbnailSrc}
                  alt="Apex Accelerator introduction video thumbnail"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-black/25" />
                <button
                  type="button"
                  onClick={() => setHasStartedVideo(true)}
                  className="absolute inset-0 z-10 flex items-center justify-center transition-opacity hover:bg-primary/10"
                  aria-label="Play Apex introduction video"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_18px_44px_hsl(var(--primary)/0.45)] transition-transform duration-300 hover:scale-105">
                    <Play className="ml-1 h-8 w-8 fill-current" />
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
        <Button
          type="button"
          onClick={() => {
            setHasStartedVideo(false);
            setIsSubmitted(false);
          }}
          className="mt-6 rounded-full bg-primary px-6 py-6 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground hover:bg-primary/90"
        >
          Register for Another Workshop
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
        <Select value={selectedWorkshop.id} onValueChange={onWorkshopChange}>
          <SelectTrigger
            id="selected-workshop"
            className="mt-3 h-14 rounded-2xl border-white/10 bg-background/70 px-4 text-sm text-foreground focus:ring-primary/40 focus:ring-offset-0"
          >
            <SelectValue placeholder="Select a workshop" />
          </SelectTrigger>
          <SelectContent className="rounded-2xl border-white/10 bg-[#17120d] text-foreground">
            {workshops.map((workshop) => (
              <SelectItem
                key={workshop.id}
                value={workshop.id}
                className="rounded-xl py-3 text-sm text-foreground focus:bg-primary/15 focus:text-foreground"
              >
                {workshop.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field
          className="md:col-span-2"
          error={errors.fullName}
          id="fullName"
          label="Full Name"
          onChange={(value) => setFieldValue("fullName", value)}
          value={values.fullName}
        />
        <Field
          error={errors.email}
          id="email"
          label="Email Address"
          onChange={(value) => setFieldValue("email", value)}
          type="email"
          value={values.email}
        />
        <div className="space-y-2">
          <Label htmlFor="registrantType" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Student or Parent
          </Label>
          <Select
            value={values.registrantType}
            onValueChange={(nextType) => {
              setFieldValue("registrantType", nextType);
              if (nextType !== "Student") {
                setFieldValue("grade", "");
                setFieldValue("school", "");
                setFieldValue("studentGoal", "");
              }
            }}
          >
            <SelectTrigger
              id="registrantType"
              className="h-14 rounded-2xl border-white/10 bg-white/[0.04] px-4 text-sm text-foreground focus:ring-primary/45 focus:ring-offset-0"
            >
              <SelectValue placeholder="Select one" />
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-white/10 bg-[#17120d] text-foreground">
              <SelectItem value="Student" className="rounded-xl py-3 text-sm text-foreground focus:bg-primary/15 focus:text-foreground">
                Student
              </SelectItem>
              <SelectItem value="Parent" className="rounded-xl py-3 text-sm text-foreground focus:bg-primary/15 focus:text-foreground">
                Parent
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.registrantType ? <p className="text-sm text-primary">{errors.registrantType}</p> : null}
        </div>

        {values.registrantType === "Student" ? (
          <div className="space-y-2">
            <Label htmlFor="grade" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              What grade are you in
            </Label>
            <Select value={values.grade} onValueChange={(value) => setFieldValue("grade", value)}>
              <SelectTrigger
                id="grade"
                className="h-14 rounded-2xl border-white/10 bg-white/[0.04] px-4 text-sm text-foreground focus:ring-primary/45 focus:ring-offset-0"
              >
                <SelectValue placeholder="Select your grade" />
              </SelectTrigger>
              <SelectContent className="rounded-2xl border-white/10 bg-[#17120d] text-foreground">
                <SelectItem value="Grade 9" className="rounded-xl py-3 text-sm text-foreground focus:bg-primary/15 focus:text-foreground">
                  Grade 9
                </SelectItem>
                <SelectItem value="Grade 10" className="rounded-xl py-3 text-sm text-foreground focus:bg-primary/15 focus:text-foreground">
                  Grade 10
                </SelectItem>
                <SelectItem value="Grade 11" className="rounded-xl py-3 text-sm text-foreground focus:bg-primary/15 focus:text-foreground">
                  Grade 11
                </SelectItem>
                <SelectItem value="Grade 12" className="rounded-xl py-3 text-sm text-foreground focus:bg-primary/15 focus:text-foreground">
                  Grade 12
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.grade ? <p className="text-sm text-primary">{errors.grade}</p> : null}
          </div>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="heardFrom" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          How did you hear about us?
        </Label>
        <Select
          value={values.heardFrom}
          onValueChange={(value) => {
            setFieldValue("heardFrom", value);
            if (value !== "TikTok" && value !== "Instagram") {
              setFieldValue("heardFromPage", "");
            }
          }}
        >
          <SelectTrigger
            id="heardFrom"
            className="h-14 rounded-2xl border-white/10 bg-white/[0.04] px-4 text-sm text-foreground focus:ring-primary/45 focus:ring-offset-0"
          >
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent className="rounded-2xl border-white/10 bg-[#17120d] text-foreground">
            <SelectItem value="TikTok" className="rounded-xl py-3 text-sm text-foreground focus:bg-primary/15 focus:text-foreground">
              TikTok
            </SelectItem>
            <SelectItem value="Instagram" className="rounded-xl py-3 text-sm text-foreground focus:bg-primary/15 focus:text-foreground">
              Instagram
            </SelectItem>
            <SelectItem value="School" className="rounded-xl py-3 text-sm text-foreground focus:bg-primary/15 focus:text-foreground">
              School
            </SelectItem>
            <SelectItem value="Email" className="rounded-xl py-3 text-sm text-foreground focus:bg-primary/15 focus:text-foreground">
              Email
            </SelectItem>
            <SelectItem
              value="Community platforms"
              className="rounded-xl py-3 text-sm text-foreground focus:bg-primary/15 focus:text-foreground"
            >
              Community platforms
            </SelectItem>
            <SelectItem value="Other" className="rounded-xl py-3 text-sm text-foreground focus:bg-primary/15 focus:text-foreground">
              Other
            </SelectItem>
          </SelectContent>
        </Select>
        {errors.heardFrom ? <p className="text-sm text-primary">{errors.heardFrom}</p> : null}
      </div>

      {values.heardFrom === "TikTok" || values.heardFrom === "Instagram" ? (
        <Field
          error={errors.heardFromPage}
          id="heardFromPage"
          label="Whose page was it?"
          onChange={(value) => setFieldValue("heardFromPage", value)}
          placeholder={values.heardFrom === "TikTok" ? "@username" : "@username or page name"}
          value={values.heardFromPage}
        />
      ) : null}

      {values.registrantType === "Student" ? (
        <div className="grid gap-4">
          <Field
            error={errors.school}
            id="school"
            label="What high school are you from?"
            onChange={(value) => setFieldValue("school", value)}
            value={values.school}
          />
          <div className="space-y-2">
            <Label htmlFor="studentGoal" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              What is one thing you would love to build or achieve during high school?
            </Label>
            <Textarea
              id="studentGoal"
              value={values.studentGoal}
              onChange={(event) => setFieldValue("studentGoal", event.target.value)}
              className="min-h-[120px] rounded-2xl border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-primary/45"
              placeholder="Optional"
            />
          </div>
        </div>
      ) : null}

      {formError ? (
        <p className="rounded-2xl border border-primary/20 bg-primary/8 px-4 py-3 text-sm text-primary">{formError}</p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground"></p>
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
